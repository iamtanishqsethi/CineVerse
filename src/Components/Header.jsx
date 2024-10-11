import {  signOut } from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const Header=()=>{
    const navigate= useNavigate()
    const user=useSelector(store => store.user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    return (
        <div
         className={"  absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between"}>
            <img
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                className={"w-40 "}
            />
            <div className={"flex justify-center p-2"}>
                <img src={user?.photoURL}
                         alt="user icon " className={"w-12 h-12 m-2"}/>
                <button className={"text-white bg-red-600 font-bold rounded p-2 m-2"}
                    onClick={handleSignOut}
                >Sign Out</button>
            </div>
        </div>
    )
}
export default Header;