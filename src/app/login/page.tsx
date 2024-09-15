"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    function handleSubmit(e: any){
        e.preventDefault();

        setLoading(true);
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({        
              username,
              password,
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          .then(res => res.json())
          .then(data =>{         
            if(data.message === "Invalid credentials" || data.message === "Username and password required"){
                setError(data.message);
                setLoading(false);
            } else {
                router.push("/home");
            }
          }).catch(err =>{
            setError(err)
          })
    }

    function handleUsernameChange(e: any){
        setUsername(e.target.value);
    }

    function handlePasswordChange(e: any){
        setPassword(e.target.value);
    }

    return (
        <div className="flex items-center ">
            <div className="mx-auto">
            <h2 className="text-2xl text-center font-bold mb-6">Enter your details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your email" value={username} onChange={handleUsernameChange} className="w-full px-3 py-2 border rounded-xl" required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 border rounded-xl" required />
                </div>
                <button className="w-full bg-[#000000] text-white py-2 border rounded-xl">Login {loading ? <ClipLoader size={20} color={"whit"} /> : ""}</button>
                <span className="text-red-600">{error}</span>
            </form>
            </div>
        </div>
    )
}

export default Login
