import IAInput from "../components/IAInput";
import IAButton from "../components/IAButton";
import { useState } from "react";
import { SignUpMethod } from "../config/firebasemethods";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [signupdata, setSignupdata] = useState({});
  const navigate = useNavigate();


  const fillModel = (key, val) => {
    signupdata[key] = val;
    setSignupdata({ ...signupdata });
  };

let SignupUser = () => {
    console.log(signupdata);
    SignUpMethod(signupdata)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-form rounded">
        <form className="form">
          <h1>SignUp</h1>
          <div className="input-form">
            <IAInput
              label="Email"
              variant="outlined"
              color="error"
              type="email"
              sx={{ width: "100%" }}
              onChange={(e) =>
                fillModel("email", e.target.value )
              }
            />
          </div>
          <div className="input-form">
            <IAInput
              label="Password"
              variant="outlined"
              color="error"
              type="password"
              sx={{ width: "100%" }}
              onChange={(e) =>
                fillModel("password", e.target.value )
              }
            />
          </div>
          <div>
            <IAButton
              variant="contained"
              color="error"
              onClick={SignupUser}
            >
              SignIn
            </IAButton>
            <div className="py-5">
            <p className="text-white">If You have already Registered?</p>
            <Link to="/login">Login</Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}