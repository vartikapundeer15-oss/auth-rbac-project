import { Button, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h4">Welcome to Dashboard 🎉</Typography>

      <Button
        variant="contained"
        color="error"
        sx={{ mt: 3 }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
    </div>
  );
}