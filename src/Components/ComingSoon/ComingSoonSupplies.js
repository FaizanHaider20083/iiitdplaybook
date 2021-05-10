import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  CardMedia,
  Link,
  Button,
} from "@material-ui/core";
import './supply.css';
import List from '@material-ui/core/List';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open,caption,tips } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{caption}</DialogTitle>
      
      <List>

      

      

      {tips.map((item,index) => (
             
                
                <img src={item} className="dialogImage" />
                
              
            ))}

            

        
        </List>
        
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function DisplayCard({Ccard}){
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const cardHeight = 250;
    const cardWidth = cardHeight * (2.5 / 3);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    
        <div className='container'>
              <img
                className="image"
                src={Ccard.image}
                alt=""
                onClick={handleClickOpen}
                
                
                
              />
              <p className="Caption" >{Ccard.caption} </p>
              
              
              <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} caption = {Ccard.caption} tips ={Ccard.tips}/>
              
      </div>



  );

}

export default DisplayCard;
