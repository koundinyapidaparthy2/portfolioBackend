function getUserLoginToken(payload) {
  console.log({ payload });
  return {
    error: null,
    message: "we recieved the data",
  };
}

export default getUserLoginToken;
