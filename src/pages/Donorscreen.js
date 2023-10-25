import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IASelect from "../components/IASelect";
import IAInput from "../components/IAInput";
import { fbAdd } from "../config/firebasemethods";
import IAButton from "../components/IAButton";
import { useNavigate } from "react-router-dom";

const Donorscreen = () => {
  const [model, setModel] = useState({});
  const roleOptions = ["A+", "A-", "O", "AB"];
  const gender = ["Male", "Female"];
  const selectoption = ["Yes", "No"];

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const resetForm = () => {
    setModel({}); 
  };

  const navigate = useNavigate();
  
  function handlenavigateBloodbank() {
    navigate('/Bloodbank');
}

  const donoruser = () => {
    console.log(model);
    fbAdd("donor", model)
            .then((res) => {
                console.log(res);
                resetForm();
            })
            .catch((err) => {
                console.log(err);
            });
    
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <h2 style={{ fontSize: "30px" }}>Register Yourself As a <span className="text-danger">Donor</span></h2>
        <IAInput
          sx={{ width: "100%" , margin: "8px 0"}}
          label="User Name"
          type="text"
          color="error"
          onChange={(e) => fillModel("username", e.target.value)}
        />
        <IAInput
          sx={{ width: "100%", margin: "8px 0", }}
          label="Email"
          type="email"
          color="error"
          onChange={(e) => fillModel("email", e.target.value)}
        />
        <IAInput
          sx={{ width: "100%", margin: "8px 0", }}
          label="Age"
          type="number"
          color="error"
          onChange={(e) => fillModel("age", e.target.value)}
        />
        <IAInput
          sx={{ width: "100%", margin: "8px 0" }}
          label="Address"
          type="address"
          color="error"
          onChange={(e) => fillModel("address", e.target.value)}
        />
        <IASelect
          label="Gender"
          name="gender"
          color="error"
          options={gender}
          onChange={(e) => fillModel("gender", e.target.value)}
        />
        <IASelect
          label="Blood Group"
          name="role"
          color="error"
          options={roleOptions}
          onChange={(e) => fillModel("bloodgroup", e.target.value)}
        />
         <IASelect
          label="Any disease?"
          name="role"
          color="error"
          options={selectoption}
          onChange={(e) => fillModel("Disease", e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ width: "90%", mt: 2 }}
          color="error"
          onClick={() => donoruser()}
        >
          Submit
        </Button>
      </Box>
      <IAButton variant="contained" sx={{ mt: 2, width: "200px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }} color="error" onClick={handlenavigateBloodbank}>
          Go Back
      </IAButton>
    </Container>
  );
};

export default Donorscreen;
