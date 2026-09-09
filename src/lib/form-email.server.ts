type EmailNotification = {
  subject: string;
  text: string;
  replyTo: string;
};

function recipients(value: string): string[] {
  return value
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

export async function sendFormNotification(notification: EmailNotification): Promise<boolean> {
  const apiKey = process.env["RESEND_API_KEY"];
  const from = process.env["FORM_NOTIFICATION_FROM"];
  const to = recipients(process.env["FORM_NOTIFICATION_TO"] ?? "");

  if (!apiKey || !from || to.length === 0) {
    console.warn(
      "[Forms] Email notification skipped. Configure RESEND_API_KEY, FORM_NOTIFICATION_FROM and FORM_NOTIFICATION_TO.",
    );
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: notification.subject.replace(/[\r\n]+/g, " "),
        text: notification.text,
        reply_to: notification.replyTo,
      }),
    });

    if (!response.ok) {
      console.error(`[Forms] Resend rejected an email notification (${response.status}).`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Forms] Email notification failed.", error);
    return false;
  }
}
