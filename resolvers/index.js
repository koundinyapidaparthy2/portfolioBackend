import getPersonalDetails from "./getPersonalDetails.js";
import getUserLoginToken from "./getUserLoginToken.js";
import updateEntireResume from "./updateEntireResume.js";
import createSessionToken from "./createSessionToken.js";
import trackSessionToken from "./trackSessionToken.js";
import isAuthenticated from "./isAuthenticated.js";

const wrapResolvers = (resolvers, wrapperFn) => {
  const wrappedResolvers = {};
  for (const key in resolvers) {
    wrappedResolvers[key] = wrapperFn(resolvers[key]);
  }
  return wrappedResolvers;
};

const root = wrapResolvers(
  {
    getPersonalDetails,
    updateEntireResume,
    createSessionToken,
    trackSessionToken,
  },
  isAuthenticated
);

root.getUserLoginToken = getUserLoginToken;

export default root;
