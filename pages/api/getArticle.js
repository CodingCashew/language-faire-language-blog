import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const id = req.body._id;
    const client = await clientPromise;
    const db = client.db("Langship");

    const articles = await db.collection("Articles").findOne({_id: id});
    // const articles = await db.collection("Articles").findOne({}).toArray();

    res.json(articles);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
