import Header from "./Header";
import {useState} from "react";

const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true)
    const toggleSignIn=()=>{
        setisSignInForm(!isSignInForm)
        // console.log(isSignInForm)
    }
    return(

        <div className={""}>
            <Header/>
            <div className={"absolute bg-black"}>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"
                    alt="bg"
                    className={"opacity-60"}
                />
            </div>
            <form className={"w-3/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-32 right-0 left-0 text-white"}>
                <h1 className={"font-bold text-3xl py-4 "}>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder={"Name"}
                        className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>}
                <input type="email" placeholder={"Email address"}
                       className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>
                <input type="password" placeholder={"Password"}
                       className={"p-4 my-2 w-full bg-zinc-900 bg-opacity-60 rounded border-gray-50"}/>
                <button
                    className={"p-2 my-4 bg-red-600 w-full rounded font-bold"}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className={"py-6 text-gray-400 cursor-pointer hover:text-white"}
                   onClick={() => toggleSignIn()}>{isSignInForm ? "New to Netflix ? Sign Up now " : "Already a User ? Sign In Now "}</p>
            </form>

        </div>
    )
}
export default Login;