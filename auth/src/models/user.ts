import mongoose from "mongoose";
import { Password } from "../utils/hashing/password";
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

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

UserSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.password);
    this.set("password", hashed);
  }
  done();
});

UserSchema.statics.build = (attr: UserAtter) => {
  return new User(attr);
};
const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export { User };
