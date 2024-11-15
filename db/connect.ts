import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return

  mongoose
    .connect(MONGODB_URI, {
      dbName: 'auth',
    })
    .then(() => console.log('Database connected'))
    .catch((error) => console.error('Database connection error:', error))
}

export default dbConnect
