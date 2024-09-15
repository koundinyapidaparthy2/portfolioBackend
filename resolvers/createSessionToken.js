import { v4 as uuidv4 } from "uuid";

async function createSessionToken({ data }) {
  console.log({ data });
  const token = uuidv4();

  return {
    token,
  };
}

export default createSessionToken;
