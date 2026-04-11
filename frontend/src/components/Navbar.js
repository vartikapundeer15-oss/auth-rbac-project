import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          Auth App
        </Typography>

        <Button color="inherit" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>

        {role === "admin" && (
          <Button color="inherit" onClick={() => navigate("/admin")}>
            Admin
          </Button>
        )}

        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}