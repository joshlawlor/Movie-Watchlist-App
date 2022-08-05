function setToken(token) {
  localStorage.setItem('token', token);
}
function getToken() {
let token = localStorage.getItem('token');

return token;
}
function removeToken() {
  localStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  removeToken
};