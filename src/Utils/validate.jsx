export const checkValidData=(email,password)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)//validating email through regex
    const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)//validating password through regex


    if(!isEmailValid){
        return "Invalid Email Id "
    }
    if(!isPassValid){
        return "Invalid Password"
    }
    return null;//means no errors
}
