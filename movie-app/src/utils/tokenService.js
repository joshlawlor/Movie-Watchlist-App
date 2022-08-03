function setToken(token) {
  localStorage.setItem('token', token);
}
function getToken() {
let token = localStorage.getItem('token');

// need to check if token = null if so renew
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