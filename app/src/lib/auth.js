import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./util";
import bcrypt from "bcryptjs";
import { User } from "./models";

// for credential login
const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("User not found!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Password not correct!");
    }

    return user;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;

        } catch (error) {
          return null;
        }
      },
    }),
  ],
})