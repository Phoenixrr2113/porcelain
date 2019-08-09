import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
}));

export default function OrderBuilder(props) {
  const classes = useStyles();
	
  return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <div style={props.modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Create Your Order</h2>
          <p id="simple-modal-description">
			{/* TODO: 
				picture upload
				Picture preview
				Size
				color 
			*/}

			{/* ------------------------ */}

			{/* TODO: 
				Price
				confirmation button --> links to checkout
			*/}
       
          </p>
        </div>
      </Modal>
    
  );
}
