import tokenService from "./tokenService";
function logout() {
    localStorage.removeItem("token");
    
}
export default {
    logout
}