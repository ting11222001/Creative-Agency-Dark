"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
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
    return { error: "Somthing went wrong" };
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
    return { error: "Somthing went wrong" };
  }
}

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  try {
    connectToDb();

    // check if repeated password is correct
    if (password != passwordRepeat) {
      return "Passwords do not match!";
    }

    // check if an user already exists
    const user = await User.findOne({ username });

    if (user) {
      return "Username already exists";
    }

    // if it's a new user, then create
    const newUser = new User({
      username,
      email,
      password,
      img
    });

    await newUser.save();

    console.log("saved to db");

    revalidatePath("/register");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}