import mongoose, { connect } from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    // check if there's an existing connection
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // create a new connection
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database')
  }
}