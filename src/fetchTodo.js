const {v4} = require('uuid')
const AWS = require('aws-sdk')

const fetchTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const { id } = event.pathParameters
  let todo;
  try {
    const result = await dynamodb.get({
       TableName : 'TodoTable',
       key: {id}
      }).promise()
    todo =  result.Item
  } catch(e){
    console.log(e)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler : fetchTodo
}