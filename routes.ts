import { Router } from "https://deno.land/x/oak/mod.ts";
import { create, list, get, update, remove } from "./controllers/dinosaur.ts";

const router = new Router();

router
  .get("/health", ({ response }): any => response.body = { message: "ok" })
  .post("/dino", create)
  .get("/dino", list)
  .get("/dino/:id", get)
  .patch("/dino/:id", update)
  .delete("/dino/:id", remove);

export default router;
