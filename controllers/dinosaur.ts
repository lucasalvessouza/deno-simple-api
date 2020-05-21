import { Dinosaur } from "../models/Dinosaur.ts";
import db from "../config/mongo-client.ts";

const collection = db.collection("dinosaur");

export const create = async ({ response, request }: any) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }
  const payload = request.body as Dinosaur;
  await collection.insertOne({ ...payload });

  response.status = 204;
};
