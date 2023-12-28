const check_login = () => {
    token = localStorage.getItem("token");
    console.log(token)
    if (token == null || token == 0 || token == undefined) {
        return false;
    }
    else {
        return true;
    }
}

export default check_login;