import { Response, Request, RouteParams } from "https://deno.land/x/oak/mod.ts";
import { Collection, ObjectId } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { Dinosaur } from "../models/Dinosaur.ts";
import db from "../config/mongo-client.ts";

const dinosaur = db.collection("dinosaur") as Collection;

export const create = async (
  { response, request }: { response: Response; request: Request },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }
  const payload = await request.body() as unknown as Dinosaur;
  try {
    await dinosaur.insertOne(payload);
    response.status = 204;
  } catch (error) {
    response.status = 500;
  }
};

export const list = async ({ response }: { response: Response }) => {
  try {
    const dinosaurs = await dinosaur.find({});
    response.status = 200;
    response.body = dinosaurs;
  } catch (error) {
    response.status = 500;
    response.body = error;
  }
};

export const get = async (
  { response, params }: { response: Response; params: RouteParams },
): Promise<any> => {
  try {
    const { id } = params;
    const dino = await dinosaur.findOne({ _id: ObjectId(id as string) });
    if (!dino) {
      response.status = 404;
      return response;
    }
    response.status = 200;
    response.body = dino;
  } catch (error) {
    response.status = 500;
  }
};

export const update = async (
  { response, request, params }: {
    response: Response;
    request: Request;
    params: RouteParams;
  },
): Promise<any> => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }
  try {
    const { id } = params;
    const payload = await request.body() as unknown as Dinosaur;
    const { modifiedCount } = await dinosaur.updateOne(
      { _id: ObjectId(id as string) },
      payload,
    );
    if (modifiedCount === 0) {
      response.status = 404;
      return response.body = { msg: "Register not found" };
    }
    response.status = 204;
  } catch (error) {
    response.status = 500;
  }
};

export const remove = async (
  { response, params }: {
    response: Response;
    params: RouteParams;
  },
): Promise<any> => {
  try {
    const { id } = params;
    await dinosaur.deleteOne(
      { _id: ObjectId(id as string) },
    );
    response.status = 200;
  } catch (error) {
    response.status = 500;
  }
};
