const {v4} = require('uuid')
const AWS = require('aws-sdk')

const addTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  console.log("inside")

  const newToDo = {
    id,
    todo,
    createdAt,
    completed: false
  }

 await dynamodb.put({
    TableName: "TodoTable",
    Item: newToDo
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newToDo),
  };
};

module.exports = {
  handler : addTodo
}