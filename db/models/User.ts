import mongoose, { Schema, Document, Model } from 'mongoose'

interface IUser extends Document {
  email: string
  password: string
  name: string
  companyName: string
  companyWebsite: string
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  companyWebsite: { type: String, required: true },
})

const User: Model<IUser> =
  mongoose.models.User || mongoose.model('User', UserSchema)

export default User
