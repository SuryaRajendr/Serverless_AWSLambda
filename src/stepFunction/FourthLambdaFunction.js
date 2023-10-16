exports.handler = async (event) => {
    try {
      // Perform some business logic or API call
      const result = "Result from FourthLambdaFunction";
  
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify('Error in FourthLambdaFunction'),
      };
    }
  };
  