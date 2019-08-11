import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
  container: {
		marginBottom: 25,
		flexDirection: 'column',
		display: 'flex',
	},
}));

export default function OrderBuilder(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

	
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
      <form className={classes.container} autocomplete="off">
							<div className={classes.container}>
								<Typography gutterBottom variant="h5" component="h2">
									Product Detail
								</Typography>
                <InputLabel htmlFor="age-simple">Select Color</InputLabel>
								<Select
                  value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={1}>Black and White</MenuItem>
                  <MenuItem value={2}>Color</MenuItem>
                </Select>
                <InputLabel htmlFor="age-simple">Select Size</InputLabel>
								<Select
                  value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={1}>11 3/4 X 15 7/8</MenuItem>
                  <MenuItem value={1}>9 1/2 X 11 3/4</MenuItem>
                  <MenuItem value={1}>8 X 10</MenuItem>
                  <MenuItem value={1}>7 X 9 1/2</MenuItem>
                  <MenuItem value={2}>5 X7</MenuItem>
                </Select>
								<TextField
									// onChange={handleChange}
									name="productDescription"
									value='3'
									label="Description"
									className={classes.textField}
									inputProps={{
										'aria-label': 'Description',
									}}
								/>
								<TextField
									// onChange={handleChange}
									name="value"
									value='5'
									label="Value"
									className={classes.textField}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">$</InputAdornment>
										),
									}}
								/>
							</div>
							<div className={classes.container}>
								<Typography gutterBottom variant="h5" component="h2">
									Dimensions
								</Typography>
								<TextField
									// onChange={handleChange}
									name="height"
									value='4'
									label="Height"
									className={classNames(
										classes.margin,
										classes.textField,
									)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">in</InputAdornment>
										),
									}}
								/>

								<TextField
									// onChange={handleChange}
									name="length"
									value='2'
									label="Length"
									className={classNames(
										classes.margin,
										classes.textField,
									)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">in</InputAdornment>
										),
									}}
								/>

								<TextField
									// onChange={handleChange}
									name="width"
									value='3'
									label="Width"
									className={classNames(
										classes.margin,
										classes.textField,
									)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">in</InputAdornment>
										),
									}}
								/>
								<TextField
									className={classNames(
										classes.margin,
										classes.textField,
									)}
									// onChange={handleChange}
									name="weight"
									value='1'
									label="Weight"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">lb</InputAdornment>
										),
									}}
								/>
								{/* <ImgUploader
									deleteImgFromProdList={deleteImg}
									thumbnail={thumbnail}
                /> */}
                <NavLink style={{width: '100%'}} to={`${process.env.PUBLIC_URL}/checkout`}>
                  <Button fullWidth style={{marginTop: 20,background: '#3B7934', color: '#FAFAFA'}} color="primary" variant='contained'>
                      Checkout
                  </Button>
                </NavLink>
							</div>
						</form>

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
