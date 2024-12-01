// lib/mongodb.ts
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Пожалуйста, добавьте MONGODB_URI в .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // В режиме разработки используем глобальную переменную
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise!
} else {
  // В продакшене создаем новую переменную
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
