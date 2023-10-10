// apiCaller.js

import memoize from './memoize';

// Assume 'getUser' is a function that makes an API call to fetch user data
const getUser = async (userId) => {
  // ... API call logic here ...
  const userData = await fetchUserData(userId);
  return userData;
};

// Use the 'memoize' function to create a memoized version of 'getUser'
const memoizedGetUser = memoize(getUser);

// Example: Making an API request for user with ID 1
memoizedGetUser(1); // API request made

// Example: Reusing the memoized result for user with ID 1
memoizedGetUser(1); // No API request made, returns previous value stored in cache
