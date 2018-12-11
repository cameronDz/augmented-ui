/**
 * JS file used to store global variables used for API paths.
 * @author cameronDz
 */
export const azure = () => {
  var api = {};
  api.base = 'https://augmentedaspnetbackend.azurewebsites.net/';
  api.version = 'v0.3';
  return api;
}

export const heroku = () => {
  var api = {};
  api.base = 'https://desolate-caverns-35920.herokuapp.com/';
  api.version = 'v0.1';
  return api;
}
