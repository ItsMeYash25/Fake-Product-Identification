import { Link } from "react-router-dom";
import { UserState } from "../context/UserContext";
import { useEffect, useState } from "react";

const Account = () => {
    const {user} = UserState()
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [account, setAccount] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(()=>{
        if(user){
            setName(user.name)
            setRole(user.role)
        }
        function walletDetail(){
            if(window.ethereum){
                window.ethereum.request({method: "eth_requestAccounts"}).then(result => {
                    accountHandler(result[0])
                })
            }else{
                setErrorMessage('Please install MetaMask browser extension to interact');
            }
        }
        function accountHandler(newAccount){
            setAccount(newAccount)
        }
        walletDetail()
    },[user])
    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }
    return ( 
        <>
        {(role === "admin" && account) && (
            <>
            <div className="container my-5">
                <div className="card rounded-0 shadow">
                    <h3 className="card-title text-center hr my-2">Hello {name}</h3>
                    <hr />
                    <div className="card-body">
                    <p className="card-text hr">Your Wallet Address Is : {account}</p>
                    <p className="card-text">Click here for Logout: <Link className="card-link rounded-0" onClick={logout}>Logout</Link> </p>
                    </div>
                </div>
            </div>
            </>
        )}
        {(role === "admin" && !account) && (
            <>
            <div className="container my-5">
                <div className="card rounded-0 shadow">
                    <h3 className="card-title text-center hr my-2">{errorMessage}</h3>
                    <div className="card-body">
                    <p className="card-text">Click here for Logout: <Link className="card-link rounded-0" onClick={logout}>Logout</Link> </p>
                    </div>
                </div>
            </div>
            </>
        )}
        {(role === "user") && (
            <>
            <div className="container my-5">
                <div className="card rounded-0 shadow">
                    <h3 className="card-title text-center hr my-2">Hello {name}</h3>
                    <hr />
                    <div className="card-body">
                    <p className="card-text">Click here for Logout: <Link className="card-link rounded-0" onClick={logout}>Logout</Link> </p>
                    </div>
                </div>
            </div>
            </>
        )}
        </>
     );
}
 
export default Account;