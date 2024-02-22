import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    rule: { type: String, required: true },
    position: { type: String },
    image: { type: String },
  },
  { timestamps: true }
)

export default mongoose.models?.User || mongoose.model('User', userSchema)
