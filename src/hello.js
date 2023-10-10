const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go"
      },
      null,
      2
    ),
  };
};

module.exports = {
  handler : hello
}