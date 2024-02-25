import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./util";

export const sayHello = async () => {
  "use server";

  console.log("hello");
}

export const addPost = async (formData) => {
  "use server";

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