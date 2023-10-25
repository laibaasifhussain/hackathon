import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function IATable({ headArray, bodyArray, align }) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {headArray.map((x, i) => (
            <TableCell
              align={align}
              key={i}
              sx={{ backgroundColor: "black", color: "white" }}
            >
              {x}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {bodyArray.map((x, i) => (
          <TableRow
            key={i}
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            {/* <TableCell align={align}>{x.firstName}</TableCell>
            <TableCell align={align}>{x.lastName}</TableCell>
            <TableCell align={align}>{x.fullName}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
