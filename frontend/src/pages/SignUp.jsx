import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formdata, setFormData] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  const changeHandler = (e) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await result.json();
      
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      navigate('/sign-in')
      
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">sign Up</h1>
      <form className="flex flex-col gap-4 " onSubmit={submitHandler}>
        <input
          className="border p-3 rounded-lg"
          id="username"
          type="text"
          placeholder="username"
          onChange={changeHandler}
        />
        <input
          className="border p-3 rounded-lg"
          id="email"
          type="email"
          placeholder="email"
          onChange={changeHandler}
        />
        <input
          className="border p-3 rounded-lg"
          id="password"
          type="password"
          placeholder="password"
          onChange={changeHandler}
        />
        <button
          disabled={loading}
          className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700"> Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
