"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./util";

export const addPost = async (formData) => {

  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  // console.log(formData);
  // console.log(title, desc, slug, userId);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    });

    await newPost.save();

    console.log("saved to db");

    revalidatePath("/blog");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong"};
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);

    console.log("deleted from db");

    revalidatePath("/blog");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong"};
  }
}