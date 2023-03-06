// import clientPromise from "../../lib/mongodb";

// const handler = async (req, res) => {
//   console.log('req.params: ', req.params)
//   // console.log('context: ', req.params)
//   // console.log('id: ', id)
//   // const { id } = req.query;
//   // const id = 1;
//   // const id = context.params.id
//   try {
//     const client = await clientPromise;
//     const db = client.db("Langship");

//     const article = await db.collection("Articles").find({id: id});

//     res.json(article);
//   } catch (e) {
//     console.error(e);
//   }
// };

// export default handler;
