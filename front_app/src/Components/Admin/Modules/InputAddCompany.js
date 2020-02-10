import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputAddCompany({setCompanyName, setAdminName}) {
  const classes = useStyles();
 // React.useEffect(

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        label="Company Name"
        variant="outlined"
        id="custom-css-outlined-input-company"
        onChange = { event => setCompanyName(event.target.value) }
      />
      <CssTextField
        className={classes.margin}
        label="Admin Name"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange = { event => setAdminName(event.target.value) }
      />
    </form>
  );
}
