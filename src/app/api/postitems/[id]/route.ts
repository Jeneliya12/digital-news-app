import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";

dbConnect();

export async function GET(request, { params }: { params: { id: string } }) {
  try {
    // Await the params object
    const { id } = await params;

    const postItem = await PostItem.findById(id).select("-__v");
    if (!postItem) {
      return new Response(
        JSON.stringify({ message: "No Item Found for this ID" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(postItem), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
