import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ background: "#1976d2" }}>
      <Toolbar>
        
        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Auth RBAC App 🚀
        </Typography>

        {/* Role */}
        <Typography sx={{ mr: 2 }}>
          Role: {role}
        </Typography>

        {/* Admin Button (only for admin) */}
        {role === "admin" && (
          <Button color="inherit" onClick={() => navigate("/admin")}>
            Admin
          </Button>
        )}

        {/* Logout */}
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
}