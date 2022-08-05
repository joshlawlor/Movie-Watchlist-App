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
function checkLogIn() {
  const token = localStorage.getItem('token');
  if(token){
      return true;
  }else{
      return false;
  }
}
export default {
  setToken,
  getToken,
  checkLogIn,
  removeToken
};