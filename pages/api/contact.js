import { MongoClient } from 'mongodb'

var MONGODB_URL = process.env.REACT_APP_MONGODB

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    //Validate
    const newMessage = {
      email,
      name,
      message,
    }

    try {
      const client = await MongoClient.connect(MONGODB_URL)
      const db = client.db()
      const result = await db.collection('contacts').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: error.message })
      console.log(message)
      return
    }


    res
      .status(201)
      .json({ message: 'Succesfuly stored message', message: newMessage })
    return
  }
}

export default handler
