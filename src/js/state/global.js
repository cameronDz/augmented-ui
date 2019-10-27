// shared method for checking if state should be updated
export const shouldFetchState = state => {
  let fetch = false;
  if (!state) {
    fetch = true;
  } else if (state.isFetching) {
    fetch = false;
  } else {
    fetch = !!state.didInvalidate;
  }
  return fetch
};
