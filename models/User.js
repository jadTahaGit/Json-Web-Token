import mongoose from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an Email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid Email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter an Email'],
    minlength: [6, 'Minimum password length is a 6 charachtars'],
  },
});
