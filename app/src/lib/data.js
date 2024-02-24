import { Post, User } from "./models";
import { connectToDb } from "./util";

// Temporary data
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
]

// Temporary data
const posts = [
  {id: 1, title: "Post 1", body: "......", userId: 1},
  {id: 2, title: "Post 2", body: "......", userId: 1},
  {id: 3, title: "Post 3", body: "......", userId: 2},
  {id: 4, title: "Post 4", body: "......", userId: 2},
]

// Temporary functions to get from the temporary data
export const getPosts = async () => {
  return posts;
}

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
}

export const getUsers = async () => {
  return users;
}

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
}

// Get data from MongoDB
// export const getPosts = async () => {
//   try {
//     connectToDb();
//     const posts = await Post.find();
//     return posts;

//   } catch (error) {
//     console.log(error);
//     throw new Error(`Failed to fetch posts: ${error}`);    
//   }
// }

// export const getPost = async (slug) => {
//   try {
//     connectToDb();
//     const post = await Post.find({slug});
//     return post;

//   } catch (error) {
//     console.log(error);
//     throw new Error(`Failed to fetch post: ${error}`);    
//   }
// }

// export const getUser = async (id) => {
//   try {
//     connectToDb();
//     const user = await User.findById(id);
//     return user;

//   } catch (error) {
//     console.log(error);
//     throw new Error(`Failed to fetch user: ${error}`);    
//   }
// }

// export const getUsers = async () => {
//   try {
//     connectToDb();
//     const users = await User.find();
//     return users;

//   } catch (error) {
//     console.log(error);
//     throw new Error(`Failed to fetch users: ${error}`);    
//   }
// }