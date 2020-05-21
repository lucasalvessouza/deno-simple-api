import { Router } from "https://deno.land/x/oak/mod.ts";
import { create } from "./controllers/dinosaur.ts";

const router = new Router();

router
  .get("/health", ({ response }): any => response.body = { message: "ok" })
  .post("/dino", create);

export default router;
