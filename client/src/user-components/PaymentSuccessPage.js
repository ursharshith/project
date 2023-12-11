import React from 'react';
import CheckMark from './check_mark.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/userhome")
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', borderRadius:"10px", border:"1px solid", backgroundColor:"white", width:"50%", margin:"auto", padding:"15px" }}>
      <img
        src={CheckMark}
        alt="Success Illustration"
        style={{ marginTop: '20px', height:"200px", width:"200px" }}
      />
      <h3>Payment Successful</h3>
      <p style={{ marginTop: '20px' }}>
        Your payment has been successfull.
      </p>
      <p style={{ marginTop: '20px' }}>
        Click NEXT to proceed.
      </p>
      <Button type='text' onClick={handleNext}>DONE</Button>
    </div>
  );
};

export default PaymentSuccessPage;
