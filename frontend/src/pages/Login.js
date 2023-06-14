import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if(json.state === true){
        const user = json.user
        const User = {
            name: user.username,
            role: user.role,
            token: json.token
        }
        localStorage.setItem("User",JSON.stringify(User))
        window.location.href = "/account"
    }else{
      alert(json.error)
    }
  };

  return (
    <>
   
        <div className="container my-5">
            <div className="card shadow rounded-0">
            <h2 className="card-title text-center my-2">Login</h2>
            <hr />
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="Email">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="Password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button className="btn btn-md btn-outline-dark rounded-0">
                Login
                </button>
            </form>
            </div>
        </div>
    </>
  );
};

export default Login;
