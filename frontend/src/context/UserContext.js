import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

const UserContext = ({children}) =>{
    const [user,setUser] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        const User = JSON.parse(localStorage.getItem("User"))
        const unProtectedRoutes = ["login","signup", "check"]
        const AdminRoutes = ["scan_product","product","account","view_products","logout"]
        const UserRoutes = ["check","scan_product","logout"]
        const currentRoute = window.location.href
        if(!User && !unProtectedRoutes.includes(currentRoute)){
            if(!currentRoute.includes("check"))
            {
                navigate("/")
            }else{
                navigate("/check")
            }
        }
        if(User && AdminRoutes.includes(currentRoute)){
            navigate("/product")
        }
        if(User && UserRoutes.includes(currentRoute)){
            navigate("/account")
        }
        if(!User && UserRoutes.includes(currentRoute)){
            navigate("/check")
        }
        setUser(User)
    },[])

    return(
        <>
            <userContext.Provider value={{user}}>
                {children}
            </userContext.Provider>
        </>
    )
}

export const UserState = () => {
    return useContext(userContext)
}

export default UserContext;