import { createFileRoute } from "@tanstack/react-router";
import editorialStandards from "@/assets/ISH-Editorial-Standards.pdf.asset.json";

export const Route = createFileRoute("/api/public/editorial-standards")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const upstream = await fetch(`${origin}${editorialStandards.url}`);
        if (!upstream.ok) {
          return new Response("Not found", { status: 404 });
        }
        const body = await upstream.arrayBuffer();
        return new Response(body, {
          headers: {
            "content-type": "application/pdf",
            "content-disposition":
              'inline; filename="ISH-Editorial-Standards.pdf"',
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
