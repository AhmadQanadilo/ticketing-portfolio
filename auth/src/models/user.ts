import mongoose from "mongoose";

interface UserAtter {
  email: string;
  password: string;
}

interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  build(attr: UserAtter): UserDocument;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

UserSchema.statics.build = (attr: UserAtter) => {
  return new User(attr);
};
const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export { User };
