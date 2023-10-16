const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/flyakeed"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

const insertIntoMongoDB = async (event) => {
    let responseBody = "";
    const statusCode = 200;
    console.log('Connecting to MongoDB');
    try {
        await client.connect();
       
        // ... Your MongoDB-related code ...
        console.log('MongoDB connection successful');

        const database = client.db("flyakeed"); // Replace with your database name
        const collection = database.collection("neom"); // Replace with your collection name

        const document = { name: "John", age: 30, email: "john@example.com", leaveBal: 4 };

        const result = await collection.insertOne(document);

        responseBody = JSON.stringify({ message: "Document inserted", insertedId: result.insertedId });
    } catch (err) {
        console.error("Error:", err);
        responseBody = JSON.stringify({ message: "Error inserting document", error: err.message });
        statusCode = 500;
    } finally {
        await client.close();
    }

    return {
        statusCode: statusCode,
        body: responseBody,
    };
};
module.exports = {
    handler : insertIntoMongoDB
  }
