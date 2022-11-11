import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({user}) {
    const [data, setData] = React.useState()
    user = JSON.parse(localStorage.getItem('user')) 
    console.log(user);

 const [open, setOpen] = useState(false)
    const {name, username, email, address, phone, company} = user;
    const {city, street} = address;

    const handleClose = () => {setOpen(false)}
    const handleOpen = () => {setOpen(true)}
  return (
    <Card sx={{ minWidth: 275 , maxWidth:600, margin:'auto'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {username}
        </Typography>
        <Typography variant="h5" component="div">
        {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {email}
        </Typography>
        <Typography variant="body2">
          {street}
          <br />
          {city}
          <br />
         {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Learn More</Button>
      </CardActions>

      <Dialog
            open={open}
          >
            <DialogTitle>
            {street}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
              {company.bs}
              </DialogContentText>
              <DialogContentText>
              {company.catchPhrase}
              </DialogContentText>
              <DialogContentText>
              {company.name}
              </DialogContentText>
              <Button onClick={handleClose} autoFocus>
              Close post
            </Button>
            </DialogContent>
          </Dialog>

    
    </Card>
  );
}
