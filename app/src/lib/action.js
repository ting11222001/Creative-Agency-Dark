"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./util";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// for admin dashboard
// previousState is for useFormState()
export const addPost = async (previousState, formData) => {

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
    revalidatePath("/admin");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}

// for admin dashboard
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}

// for admin dashboard
// previousState is for useFormState()
export const addUser = async (previousState, formData) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
  // console.log(formData);
  // console.log(title, desc, slug, userId);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}

// for admin dashboard
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
    // Also delete the posts related to this user
    await Post.deleteMany({ userId: id });
    console.log("deleted from db");
    revalidatePath("/admin");

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}

// for credentials register
// previousState is from RegisterForm's useFormState()
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  try {
    connectToDb();

    // check if repeated password is correct
    if (password != passwordRepeat) {
      return { error: "Passwords do not match!" };
    }

    // check if an user already exists
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
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
    return { success: true };

  } catch (error) {
    console.log(error);
    return { error: "Somthing went wrong" };
  }
}

// for credentials log in
// previousState is from RegisterForm's useFormState()
export const login = async (previousState, formData) => {
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