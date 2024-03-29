
function checkValidData(email,password) {
    const em =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const pas=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!em){
        return "email validation failed";
    }
    if(!pas){
        return "password is weak";
    }
    return null;

  
}

export default checkValidData;