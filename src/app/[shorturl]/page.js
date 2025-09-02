import clientPromise from "../../../lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = params;

  const client = await clientPromise;
  const db = client.db("shawty");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold">Short URL not found 🚫</h1>
        <a
          href={process.env.NEXT_PUBLIC_HOST || "/"}
          className="mt-4 text-blue-600 underline"
        >
          Go back home
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">Your short link works! 🎉</h1>
      <p className="mt-2">It points to:</p>
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-600 underline"
      >
        {doc.url}
      </a>
    </div>
  );
}
