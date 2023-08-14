import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material"
import { ActionsButtons } from "./ActionsButtons";

export const TableUsers = ({data}) => {
  return (
    <>
      <TableContainer sx={{ width: "100%", marginTop: "12px" }}>
        <Table size="small">
          <TableHead sx={{ width: "80%" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>N#</TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Gender
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Username
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Website
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "80%" }}>
            {data?.data.map(
              ({ id, name, email, city, username, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ color: "white" }}>{index + 1}</TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    {name}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {email}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {city}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {username}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {website}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    <ActionsButtons id={id}/>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
