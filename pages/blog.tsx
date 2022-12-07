import { NextPage } from "next";
import clientPromise from "../lib/mongodb";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// export default function Blog({articles}: any) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title className={styles.myClass}>Langship</title>
//         <meta name="description" content="Langship" />
//         <link rel="icon" href="../logo.png" />
//       </Head>
//       {JSON.stringify(articles)}
//     </div>
//   )
// }

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("articles").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("artivles").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}



export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}


// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch('');
//   const { results } = await res.json();

//   return {
//     props: {
//       articles: results,
//     }
//   }
// }