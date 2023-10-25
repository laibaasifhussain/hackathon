import IAInput from "../components/IAInput";
import IAButton from "../components/IAButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbLogin } from "../config/firebasemethods";

export default function Login() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
  model[key] = val;
  setModel({ ...model });
};


  const loginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        navigate("/Bloodbank");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-form shadow rounded">
        <form className="form">
          <h1>Login</h1>
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
                fillModel("password", e.target.value)
              }
            />
          </div>
          <div>
            <IAButton
              variant="contained"
              color="error"
              onClick={loginUser}
            >
              Login
            </IAButton>
          </div>
        </form>
      </div>
    </div>
  );
}