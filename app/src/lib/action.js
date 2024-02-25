"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./util";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

// for credentials register
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

    // hash the password before saving into database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // if it's a new user, then create
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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

// for credentials log in
export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {

    await signIn("credentials", { username, password });

  } catch (error) {
    console.log(error);
    
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    throw error;
  }
}

export const handleLogout = async (formData) => {
  "use server";
  await signOut();
}