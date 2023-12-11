import { TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function ModificationPage() {
    const [newWallet, setNewWallet] = useState(0);
    const email = localStorage.getItem("userEmail");
    const handleNewWallet = () => {
        axios.put(`http://localhost:8080/wallet/${email}`, {newWallet})
        .then((result) => console.log(result))
        .catch(err => console.log(err));
    }
  return (
    <div>
      <TextField
        required
        fullWidth
        name="walletupdate"
        label="Wallet Updae"
        type="number"
        id="walletupdate"
        onChange={(e) => setNewWallet(e.target.value)}
      />
      <Button type="text" onClick={handleNewWallet}>update-W</Button>
    </div>
  );
}

export default ModificationPage;
