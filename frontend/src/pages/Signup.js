import { useState } from "react";
import { Navigate } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const role = 'admin'
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, email, password, role })
        })
        const json = await response.json()
        if(json.status === true){
            alert("Manufacturer Created Successfully")
        }
    }

  return (
    <>
      <div className="container my-5">
        <div className="card shadow rounded-0">
          <h2 className="card-title text-center my-2">Signup</h2>
          <hr />
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Username">Username</label>
              <input type="text" className="form-control" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Email">Email Address</label>
              <input type="email" className="form-control" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-md btn-outline-dark rounded-0">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
