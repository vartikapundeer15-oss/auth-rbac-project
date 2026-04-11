import Navbar from "../components/Navbar";
import { Typography, Box } from "@mui/material";

export default function Admin() {
  return (
    <>
      <Navbar />
      <Box textAlign="center" mt={5}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Typography mt={2}>Manage users and system ⚙️</Typography>
      </Box>
    </>
  );
}