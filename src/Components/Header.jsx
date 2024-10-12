import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, removeUser} from "../Utils/userSlice";
import {LOGO} from "../Utils/constants";


const Header=()=>{
    const navigate= useNavigate()
    const dispatch=useDispatch();


    const user=useSelector(store => store.user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
            // no need of navigate from here too
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }


    //added the on auth state change here
    //this allows too navigaye
    useEffect(() => {
        const unSubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

                //redirect the user after signing in to browse page
                //this will be done using useNavigate() hook

                navigate("/browse")

            } else {
                // User is signed out
                dispatch(removeUser());
                //navigate back to main page
                navigate("/")
            }
        });
        return ()=> unSubscribe()//when the header component will unmount  we will unsubscribe from the store
    }, []);

    return (
        <div
         className={"  absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between"}>
            <img
                src={LOGO}
                alt="logo"
                className={"w-40 "}
            />
            {user && <div className={"flex justify-center p-2"}>
                <img src={user?.photoURL}
                     alt="user icon " className={"w-12 h-12 m-2"}/>
                <button className={"text-white bg-red-600 font-bold rounded p-2 m-2"}
                        onClick={handleSignOut}
                >Sign Out
                </button>
            </div>}
        </div>
    )
}
export default Header;