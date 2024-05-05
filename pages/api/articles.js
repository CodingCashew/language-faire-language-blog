// import clientPromise from "../../lib/mongodb";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    // const client = await clientPromise;
    // const db = client.db("Langship");

    const articles = await prisma.articles.findMany();
    // const articles = await db.collection("Articles").find({}).toArray();

    res.json(articles);
  } catch (e) {
    console.error('error fetching articles: ', e);
  }
};

export default handler;
