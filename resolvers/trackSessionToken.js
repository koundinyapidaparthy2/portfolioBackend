async function trackSessionToken({ data }, { analyticsToken }) {
  // tracker token from args

  console.log({ data, analyticsToken });

  return {
    message: "recieved Data",
    error: false,
  };
}

export default trackSessionToken;
