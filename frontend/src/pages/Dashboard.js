import { Button, Typography } from "@mui/material";

export default function Dashboard() {

  const role = localStorage.getItem("role"); // ✅ get role

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <Typography variant="h4">
        Welcome to Dashboard 🎉
      </Typography>

      {/* ✅ SHOW ROLE */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Role: {role}
      </Typography>

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