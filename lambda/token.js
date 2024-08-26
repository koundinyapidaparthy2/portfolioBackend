// index.js
import { verify } from "jsonwebtoken"; // For token validation
const allowedOrigins = ["*"]; // Allowed CORS origins

export async function handler(event) {
  // CORS Handling
  const origin = event.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
      },
      body: JSON.stringify({ message: "CORS headers set!" }),
    };
  }

  // Token Validation
  const token = event.headers.Authorization || "";
  if (!validateToken(token)) {
    return {
      statusCode: 403,
      headers: {
        "Access-Control-Allow-Origin": origin,
      },
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }

  // Handle the request
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": origin,
    },
    body: JSON.stringify({ message: "Request successful!" }),
  };
}

const validateToken = (token) => {
  // Your token validation logic here
  try {
    // Verify JWT token (example, replace with your actual validation logic)
    const decoded = verify(token, "your-secret-key");
    return !!decoded;
  } catch (err) {
    return false;
  }
};
