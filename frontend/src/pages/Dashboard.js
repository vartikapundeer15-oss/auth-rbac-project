import Navbar from "../components/Navbar";
import { Typography, Box } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Box textAlign="center" mt={5}>
        <Typography variant="h4">User Dashboard</Typography>
        <Typography mt={2}>Welcome to your dashboard 👋</Typography>
      </Box>
    </>
  );
}