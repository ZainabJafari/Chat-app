import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox"; 
import {User} from '../../type/user'

const SignUp = () => {
  const [inputs, setInputs] = useState<User>({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleCheckboxChange = (gender: "male" | "female" | "") => {
    setInputs(inputs => ({ ...inputs, gender }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
   <form onSubmit={handleSubmit} className="w-1/3 mx-auto p-8 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-white mb-6">Sign Up</h2>

  <div className="mb-4">
    <input
      name="fullName"
      type="text"
      placeholder="Full Name"
      value={inputs.fullName}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="mb-4">
    <input
      name="userName"
      type="text"
      placeholder="Username"
      value={inputs.userName}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="mb-4">
    <input
      name="password"
      type="password"
      placeholder="Password"
      value={inputs.password}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="mb-4">
    <input
      name="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      value={inputs.confirmPassword}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="mb-4">
    <GenderCheckbox
      selectedGender={inputs.gender || ''}
      onCheckboxChange={handleCheckboxChange}
    />
  </div>

  <div className="mb-4">
    <button
      type="submit"
      disabled={loading}
      className={`w-full p-3 text-white rounded-md ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {loading ? "Loading..." : "Sign Up"}
    </button>
  </div>

  <p className="text-center text-white">
    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
  </p>
</form>

  );
};

export default SignUp;
