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
   <div>
       <h1 className="text-3xl font-semibold text-center text-gray-300 mb-2">
       Sign up<span className="text-blue-500"> ChatApp</span>
        </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
   <input
     name="fullName"
     type="text"
     placeholder="Full Name"
     value={inputs.fullName}
     onChange={handleChange}
     className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
   />
   <input
     name="userName"
     type="text"
     placeholder="Username"
     value={inputs.userName}
     onChange={handleChange}
     className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
   />
   <input
     name="password"
     type="password"
     placeholder="Password"
     value={inputs.password}
     onChange={handleChange}
     className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
   />
   <input
     name="confirmPassword"
     type="password"
     placeholder="Confirm Password"
     value={inputs.confirmPassword}
     onChange={handleChange}
     className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
   />
   <GenderCheckbox
     selectedGender={inputs.gender || ''}
     onCheckboxChange={handleCheckboxChange}
   />
   <button
     type="submit"
     disabled={loading}
     className={`w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ${loading ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
   >
     {loading ? "Loading..." : "Sign Up"}
   </button>
   <Link to="/login" className="text-center text-blue-500 hover:underline">
     Already have an account? Log in
   </Link>
 </form>
 </div>


  );
};

export default SignUp;
