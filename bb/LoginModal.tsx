import React, { useState, useContext, useRef } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";
import { UserContext } from "./UserProvider";
import axios from "axios";

const LoginModal: React.FC = () => {
const { state, dispatch } = useContext(UserContext);
const [isOpen, setIsOpen] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async () => {
try {
const res = await axios.post('http://localhost:8787/api/user/login', {
email: email,
password: password
});

  dispatch({ type: "LOGIN", payload: res.data.user });
  setError('');
  
  setIsOpen(false);
  setEmail('');
  setPassword('');
} catch (e) {
  dispatch({ type: "LOGOUT" });
  setError("שם המשתמש או הסיסמא אינם תואמים.");
  console.log(e);
  setEmail('');
  setPassword('');
}
};
if(state.user) return null;
return (
<>
<Button variant="contained" onClick={() => setIsOpen(true)}>
כניסת משתמש
</Button>
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  
<Box sx={{ ...modalStyle }}>
<Typography variant="h6">התחברות</Typography>
<TextField
label="מייל"
value={email}
onChange={(e) => setEmail(e.target.value)}
fullWidth
margin="normal"
/>
<TextField
label="סיסמא"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
fullWidth
margin="normal"
/>
{error && <Typography color="error">{error}</Typography>}
<Button variant="contained" onClick={handleLogin}>
התחבר
</Button>
</Box>
</Modal>
</>
);
};

const modalStyle = {
position: "absolute" as "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 400,
bgcolor: "background.paper",
boxShadow: 24,
p: 4,
};

export default LoginModal;