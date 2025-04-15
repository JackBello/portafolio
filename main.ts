import { Application, send } from "@oak/oak";
import { brotli } from "https://deno.land/x/oak_compress@v0.0.2/mod.ts";
import { oakCors } from "@tajpouria/cors";
import { existsSync } from "@std/fs";

const app = new Application();

app.use(oakCors());
app.use(brotli());

app.use(async (ctx) => {
  let filePath = ctx.request.url.pathname;

  if (!existsSync(`dist${filePath}`)) {
    filePath = "/index.html";
  }

  await send(ctx, filePath, {
    root: `${Deno.cwd()}/dist`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
