
function getUser() {
    let token = localStorage.getItem("token");
    return JSON.parse(token.split('.')[1]).user;
}
function logout() {
    localStorage.removeItem("token");
}
export default {
    getUser,
    logout
}