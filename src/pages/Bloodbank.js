import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IAButton from "../components/IAButton";
// import img from "../assets/IMG.jpg";

const Bloodbank = () => {
  const navigate = useNavigate();

  function handlenavigateDonorscreen() {
      navigate('/Donorscreen');
  }

  function handlenavigateAcceptorscreen() {
      navigate('/Acceptorscreen');
  }
  return (
    <Box
      sx={{ height: "100vh", background: "#f6f5f7" }}
      className="d-flex  justify-content-center align-items-center flex-column"
    >
      <h2 className="mb-3" style={{color:"red"}}>Welcome to Blood Bank Application</h2>
      <div className='text-center m-2 p-2'>
                <IAButton
                    variant="contained"
                    color='error'
                    onClick={handlenavigateDonorscreen}
                    style={{ marginRight: '10px' }}
                >
                    Register Yourself as a Donor
                </IAButton>

                <p></p>
                <IAButton
                    variant="contained"
                    color="error"
                    onClick={handlenavigateAcceptorscreen}
                >
                    Select Donor Of your Blood Group
                </IAButton>
                </div>
    </Box>
  );
};

export default Bloodbank;
