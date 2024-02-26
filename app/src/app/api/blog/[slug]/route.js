import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

  const { slug } = params;
  // console.log(slug);

  try {

    connectToDb();

    const post = await Post.findOne({ slug });
    // console.log(post);
    return NextResponse.json(post);

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
}

export const DELETE = async (request, { params }) => {

  const { slug } = params;
  // console.log(slug);

  try {

    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");

  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
}