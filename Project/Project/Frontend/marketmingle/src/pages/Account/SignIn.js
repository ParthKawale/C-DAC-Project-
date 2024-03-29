import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import Header from "../../components/home/Header/Header";
import { loginUser } from '../../Services/LoginService'

const SignIn = () => {
  const navigate = useNavigate();
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  // const handleSignUp = (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     setErrEmail("Enter your email");
  //   }

  //   if (!password) {
  //     setErrPassword("Create a password");
  //   }
  //   // ============== Getting the value ==============
  //   if (email && password) {
  //     setSuccessMsg(
  //       ``
  //     );
  //     setEmail("");
  //     setPassword("");
  //   }
  // };
  // ==========================================
  const handleLogin = async (event) => {
    event.preventDefault();
    const data={
      email:email,
      password:password
    }
    try {
      const response = await loginUser(data);
      console.log("in login user")
      console.log(response)
      if (response.status === 401) {
        alert(" Sorry! You dont have any account registerd with this email Id, Please SingUp Before LogIn ")
      } else if (response.status === 201) {
        const userId = response.data;
        const role= userId.message;
        sessionStorage.setItem("role",role);
        const user = {
          id: userId,
        };
        console.log(user.id);
        console.log(role);
        if(role==="SELLER"){
        navigate("/inventory");
        }else{
          navigate('/')
        }
        console.log('Login Successful');
      }
      else if (response.status === 400) {
        alert("Password Incorrect")
      } else if (response.status === 502) {
        alert("Some thing went Wrong")
      }
    } catch (error) {
      alert("Incorrect Email Or Password")
      console.error('Error logging in:', error);
    }
  };

  // =========================================
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (<>
          <Header />
          {/* // Signin page */}
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center" onSubmit={handleLogin}>
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Sign in
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleLogin}
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
