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
    <form onSubmit={handleSubmit}>
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={inputs.fullName}
        onChange={handleChange}
      />
      <input
        name="userName"
        type="text"
        placeholder="Username"
        value={inputs.userName}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleChange}
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={inputs.confirmPassword}
        onChange={handleChange}
      />
      <GenderCheckbox
        selectedGender={inputs.gender || ''}
        onCheckboxChange={handleCheckboxChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign Up"}
      </button>
      <Link to="/login">Already have an account? Log in</Link>
    </form>
  );
};

export default SignUp;
