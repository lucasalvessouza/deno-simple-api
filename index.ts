import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import errorMiddleware from "./middlewares/errors.ts";

const { HOST, PORT } = config();

const app = new Application();
app.use(errorMiddleware);
app.use(router.routes());

console.log("Hello Folks !\nWelcome to Deno example API");
console.log(`App running on ${HOST}:${PORT} !`);

await app.listen(`${HOST}:${PORT}`);
