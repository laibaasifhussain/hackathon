import React, { useState, useEffect } from "react";
import { fbGet } from "../config/firebasemethods";
import { styled } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import IASelect from "../components/IASelect";
import { tableCellClasses } from "@mui/material/TableCell";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IAButton from "../components/IAButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#CD5C5C",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Acceptorscreen = () => {
  const [allDonor, setAllDonor] = useState([]);
  const [loader, setLoader] = useState(false);
  const [roleOptions] = useState([
    "All",
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ]);
  const [item, setItem] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);

  const navigate = useNavigate();
  
  function handlenavigateBloodbank() {
    navigate('/Bloodbank');
}

  const GetDonors = () => {
    setLoader(true);
    fbGet("donor")
      .then((res) => {
        setLoader(false);
        setAllDonor([...res]);
      })
      .catch((err) => {
        setLoader(true);
        console.log(err);
      });
  };

  const filterItem = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);

    let allowedBloodGroups = [];

    if (bloodGroup === "All") {
      allowedBloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    } else if (bloodGroup === "A+" || bloodGroup === "A-") {
      allowedBloodGroups = ["A+", "A-", "AB+", "AB-"];
    } else if (bloodGroup === "O+" || bloodGroup === "O-") {
      allowedBloodGroups = ["O+", "O-"];
    }

    const filteredDonors = allDonor?.filter((donor) =>
      allowedBloodGroups.includes(donor.bloodgroup)
    );

    setItem(filteredDonors);
  };

  useEffect(() => {
    GetDonors();
  }, []);

  return (
    <>
    <div>
      <h1 className="text-center text-danger">Select Donor of your Blood Group</h1>
    </div>
    <div>
    <Form.Group style={{ width: "200px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <IASelect
          className="text-center" 
          label="Blood Group"
          name="role"
          color="error"
          options={roleOptions}
          onChange={(e) => filterItem(e)}
        />
    </Form.Group>
    </div>
    <Box sx={{ height: "100vh", background: "#f6f5f7" }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Donor Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Blood Group</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loader ? (
              <TableRow>
                <StyledTableCell align="center" colSpan={5}>
                  Loading...
                </StyledTableCell>
              </TableRow>
            ) : (
              item.map((x, i) => (
                <TableRow key={i}>
                  <StyledTableCell align="center">{x.username}</StyledTableCell>
                  <StyledTableCell align="center">{x.age}</StyledTableCell>
                  <StyledTableCell align="center">{x.bloodgroup}</StyledTableCell>
                  <StyledTableCell align="center">{x.gender}</StyledTableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <IAButton variant="contained" sx={{ mt: 2 }} color="error" onClick={handlenavigateBloodbank}>
          Go Back
      </IAButton>
    </Box>
    </>
  );
};

export default Acceptorscreen;
