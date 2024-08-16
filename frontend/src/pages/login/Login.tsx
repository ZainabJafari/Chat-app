import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  
  const { loading, login, error } = useLogin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/3 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-10">
          Login<span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-white text-xl pb-3">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered p-2"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="pt-2">
            <label className="label">
              <span className="label-text text-white text-xl pb-3">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-white bg-slate-600 p-3 w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner text-white text-xl"></span>
              ) : (
                "Login"
              )}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

          </div>
          
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
