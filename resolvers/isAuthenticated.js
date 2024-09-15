const isAuthenticated = (resolver) => {
  return (parent, args, context, info) => {
    // i will change this later
    if (context.user) {
      throw new Error("Unauthorized: You need to log in.");
    }
    return resolver(parent, args, context, info);
  };
};

export default isAuthenticated;
