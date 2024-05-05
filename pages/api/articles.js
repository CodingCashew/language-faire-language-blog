import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Langship");

    const articles = await db.collection("Articles").find({}).toArray();

    res.json(articles);
  } catch (e) {
    console.error('error fetching articles: ', e);
  }
};

export default handler;
