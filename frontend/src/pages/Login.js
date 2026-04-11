import { useForm } from "react-hook-form";
import { useState } from "react";
import API from "../api";
import {
  TextField,
  Button,
  CircularProgress,
  Alert,
  Box,
  Paper,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") navigate("/admin");
      else navigate("/dashboard");

    } catch {
      setMsg("Invalid Credentials");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper elevation={10} sx={{ padding: 4, width: 320, borderRadius: 3 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Welcome 
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", { required: true })}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", { required: true })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={20} /> : "Login"}
          </Button>

          {msg && <Alert sx={{ mt: 2 }}>{msg}</Alert>}
        </form>
      </Paper>
    </Box>
  );
}