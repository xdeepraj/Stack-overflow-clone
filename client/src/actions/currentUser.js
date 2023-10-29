export const setCurrentUser = (data) => {
  return {
    type: "Fetch_CURRENT_USER",
    payload: data,
  };
};
