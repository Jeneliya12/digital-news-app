import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";

// Connect to MongoDB
dbConnect();

// GET Handler
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    // Access `params` directly
    const { id } = context.params;

    if (!id) {
      return new Response(JSON.stringify({ message: "ID not provided" }), {
        status: 400,
      });
    }

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

// PUT Handler
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return new Response(JSON.stringify({ message: "ID not provided" }), {
        status: 400,
      });
    }

    const updatedItem = await request.json();

    const postItem = await PostItem.findByIdAndUpdate(id, updatedItem, {
      new: true, // Return the updated document
    });

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
    console.error("Error updating post by ID:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
