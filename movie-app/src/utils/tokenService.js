function setToken(token) {
    localStorage.setItem('token', token);
  }
function getToken() {
  let token = localStorage.getItem('token');
  if (token) {
    const payload = JSON.parse((token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null;
    }
  }
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
  