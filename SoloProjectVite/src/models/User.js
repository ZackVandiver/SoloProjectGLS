// Importing mongoose to create a schema
import mongoose from 'mongoose';

// Defining the User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any other fields you might need for your user here
});

// Creating the model from the schema
const User = mongoose.model('User', userSchema);

export default User;
