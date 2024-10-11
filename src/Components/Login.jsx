import Header from "./Header";
import {useRef, useState} from "react";
import {checkValidData} from "../Utils/validate";
import {auth} from "../Utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../Utils/userSlice";

const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const toggleSignIn=()=>{
        setisSignInForm(!isSignInForm)

    }
    const handleButtonClick=()=>{
        //validate the form
        const message =checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)
        console.log(message)
        if(message) return;//don't go ahead

        //create a new user
        //sign in / sign up
        if(!isSignInForm){//signup form
            createUserWithEmailAndPassword(
                auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user)

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/148245926?v=4"
                    }).then(() => {
                        // Profile updated then navigate
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message())
                    });



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)

                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                });
        }


    }
    return(

        <div className={""}>
            <div
                className={"  absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full"}>
                <img
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo"
                    className={"w-40 "}
                />
            </div>
            <div className={"absolute bg-black"}>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"
                    alt="bg"
                    className={"opacity-60"}
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className={"w-3/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-32 right-0 left-0 text-white"}>
                <h1 className={"font-bold text-3xl py-4 "}>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input ref={name}
                           type="text" placeholder={"Name"}
                                         className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>}
                <input
                    ref={email}
                    type="email" placeholder={"Email address"}
                    className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>
                <input
                    ref={password}
                    type="password" placeholder={"Password"}
                    className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>
                <p className={"text-red-500 font-bold py-2 "}>{errorMessage}</p>
                <button
                    className={"p-2 my-4 bg-red-600 w-full rounded font-bold"}
                    onClick={handleButtonClick}

                >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className={"py-6 text-gray-400 cursor-pointer hover:text-white"}
                   onClick={() => toggleSignIn()}>{isSignInForm ? "New to Netflix ? Sign Up now " : "Already a User ? Sign In Now "}</p>
            </form>

        </div>
    )
}
export default Login;