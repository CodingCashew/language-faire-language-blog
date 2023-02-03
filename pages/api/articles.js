import clientPromise from "../../lib/mongodb";
// import { NextApiRequest, NextApiResponse } from "next"

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
// export default function handler(req, res) {
//   console.log('in handler func')
//   const client = clientPromise;
//   const db = client.db("Langship");
//   console.log('db: ', db)
//   console.log('req.method: ', req.method)
//   switch (req.method) {
//     case "GET":
//       const articles = db.collection("Articles").find({}).toArray();
//       console.log('articles: ', articles)
//       res.json({ status: 200, data: articles });
//       break;
//   }
// }


const handler = async (req, res) => {
  try {
      const client = await clientPromise;
      const db = client.db("Langship");

      const articles = await db
          .collection("Articles")
          .find({})
          .toArray();

      res.json(articles);
  } catch (e) {
      console.error(e);
  }
};

export default handler;