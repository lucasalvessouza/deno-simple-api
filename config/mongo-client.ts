import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const { MONGO_URL } = config();

const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database("deno_api");
export default db;
