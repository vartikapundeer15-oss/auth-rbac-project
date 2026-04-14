import Navbar from "../components/Navbar";
import { Typography, Box, Paper } from "@mui/material";

export default function Admin() {
  return (
    <div>
      {/* 🔹 Top Navbar */}
      <Navbar />

      {/* 🔹 Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            borderRadius: 3,
            minWidth: 300,
          }}
        >
          <Typography variant="h4" color="secondary">
            Admin Panel 🔥
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}