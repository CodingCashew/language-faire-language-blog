import { MongoClient } from "mongodb";

if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri: string = process.env.MONGO_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

// import { MongoClient } from 'mongodb';
// require("dotenv").config();

// const uri = process.env.MONGO_URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client
// let clientPromise;

// if (!process.env.MONGO_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// export default clientPromise
