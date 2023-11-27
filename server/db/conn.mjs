import { MongoClient } from "mongodb";

const connectionString = '***';

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("devio-food");

export default db;
