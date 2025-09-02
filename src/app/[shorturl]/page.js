import { redirect } from "next/navigation";
import clientPromise from "../../../lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = params;

  const client = await clientPromise;
  const db = client.db("shawty");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc && doc.url) {
    redirect(doc.url);
  }

  // If not found, show an error message
  return <div>Short URL not found.</div>;
}