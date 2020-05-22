import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://user:1234@cluster0-9hrlu.mongodb.net/test?retryWrites=true&w=majority");

const db = client.database("deno_api");
export default db;
