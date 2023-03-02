import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  try {
    // console.log('req.params.id: ', req.params.id)
    // console.log('id in getArticle:', id)
    const client = await clientPromise;
    const db = client.db("Langship");
    const { id } = req.params;
console.log('id in getArticle: ', id)
    const article = await db.collection("Articles").findOne({_id: id});
    // console.log('article in getArticle: ', article)
    res.json(article);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
