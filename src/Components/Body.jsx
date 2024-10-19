import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, useNavigate} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import MovieDescription from "./MovieDescription";


const Body=()=>{

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/browse/:movieId",
            element:<MovieDescription/>
        }
    ])

    //can navigate here , to avoid the bug- was able to access browse page without even logging in  and vice versa
    // moving the navigate to somewhere that is present on every page and is inside the router provider

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;