import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, useNavigate} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import {useEffect} from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/firebase";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../Utils/userSlice";

const Body=()=>{

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

                //redirect the user after signing in to browse page
                //this will be done using useNavigate() hook

                // navigate("/browse")
                //cant navigate from here as the navigate needs to be inside the router provider itself is in the child
            } else {
                // User is signed out
                dispatch(removeUser());
                //navigate back to main page
                // navigate("/")
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;