import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          Auth App
        </Typography>

        {role === "admin" && (
          <Button color="inherit" href="/admin">Admin</Button>
        )}

        <Button color="inherit" onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}