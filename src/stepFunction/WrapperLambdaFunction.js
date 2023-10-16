exports.handler = async (event) => {
    try {
      // Perform any necessary setup or business logic
      console.log('WrapperLambdaFunction executed');
  
      return {
        statusCode: 200,
        body: JSON.stringify('WrapperLambdaFunction executed'),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify('Error in WrapperLambdaFunction'),
      };
    }
  };
  