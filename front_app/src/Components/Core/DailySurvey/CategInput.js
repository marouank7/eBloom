import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CategInput( {setCategory, category, currentDay}) {
  const classes = useStyles();
  //const [category, settCategory] = React.useState('Category');
  const handleChange = event => {

    setCategory(event.target.value);
  };
  return (
    <>
        {/* <InputLabel className={classes.margin} id="customized-select-label" shrink variant={'filled'}>Category</InputLabel> */}
        <Select xs={3}
          //labelId="customized-select-label"
          id={currentDay}
          value={category ? category : "Category"}
          onChange={(e)=> setCategory(e,currentDay)}
          input={<BootstrapInput />}
        >
          <MenuItem value="Category">
            <em>Category</em>
          </MenuItem>
          <MenuItem  value={'Individual'}>Individual</MenuItem>
          <MenuItem  value={'Team'}>Team</MenuItem>
          <MenuItem  value={'Company'}>Company</MenuItem>
        </Select>
    </>
  );
}
