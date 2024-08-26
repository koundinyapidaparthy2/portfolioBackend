export async function handler(event) {
  console.log("Received event:", JSON.stringify(event, null, 2));

  // Handle the event and return a response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
}
