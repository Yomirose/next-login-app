

function Login(){
    return (
        <div className="flex items-center ">
            <div className="mx-auto">
                <h2 className="text-2xl text-center font-bold mb-6">Enter your details</h2>
                <form>
                    <div className="mb-3">
                        <label>Username</label>
                        <input className="w-full px-3 py-2 border rounded-xl" />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input className="w-full px-3 py-2 border rounded-xl" />
                    </div>
                    <button className="w-full bg-[#000000] text-white py-2">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login