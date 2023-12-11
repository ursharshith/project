import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function StudentReview() {
  const [formData, setFormData] = React.useState({
    SSC_Board_Type: 'Option',
    SSC_Type: 'Regular'
  })
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
  }

  const navigate = useNavigate();
  const handleEdit = () => {

  }

  return (
    <React.Fragment>
      <dev>
        <Button type="txet" onClick={handleEdit}>Edit</Button>
      </dev>
    </React.Fragment>
  );
}
