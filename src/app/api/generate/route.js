import clientPromise from "../../../../lib/mongodb";  // adjust path if needed

export async function POST(request) {
  try {
    const body = await request.json();

    // Connect to Mongo
    const client = await clientPromise;
    const db = client.db("shawty"); // your DB name
    const collection = db.collection("url");

    // Check if short URL already exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return Response.json(
        { success: false, error: true, message: "URL already exists" },
        { status: 400 }
      );
    }

    // Insert new URL mapping
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json(
      { success: true, error: false, message: "URL generated successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("API /generate error:", err);
    return Response.json(
      { success: false, error: true, message: "Database connection failed" },
      { status: 500 }
    );
  }
}
