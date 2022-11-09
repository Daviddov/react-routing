import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveDialog({ post }) {
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const theme = useTheme();
  const navigete = useNavigate()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClose = () => {
    setOpen(false);
    navigete('/Posts')
  };

  const handleComments = () => {
    setDialogOpen(true)
    console.log('comments');
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {post.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {post.body}
          </DialogContentText>
          <Button autoFocus onClick={handleComments}>
              Open comments
            </Button>
            <Button onClick={handleClose} autoFocus>
              Close post
            </Button>
          <Dialog
            open={dialogOpen}
            onClose={handleClose}
          >
            <DialogTitle>
              ContentText
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                ContentText
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </DialogContent>
      </Dialog>
    </div>
  );
}