

const GetErrorMessage = (type) => {
    switch (type) {
        case "email":
            return "Email already exists";
        case "userName":
            return "Username already exists";
        case "userPassword":
            return "Password must be at least 8 characters long";
        case "userConfirmPassword":
            return "Passwords do not match";
        default:
            return "";
    }
};



const FormError = ({ error }) => {
    if(!error){
        return<></>
    }
    const type = error
    const message = GetErrorMessage(type)
}
    