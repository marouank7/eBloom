import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from '@material-ui/core/Box';

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    backgroundColor: "rgba(110,161,163, 0.4)",
    color: "white"
  },
  area: {
    padding: "33px"
  },
  img: {
    width: "30%",
    height: "30%",
    margin: "0 auto"
  },
  drivers : {
    color: "white"
  }

});

const Welcome = ({ match }) => {
  const classes = useStyles();
  const [APIlogo, setAPIlogo] = React.useState("");
  React.useEffect( () => setAPIlogo(`https://logo.clearbit.com/${match.params.company}.com`), [match.params.company]) ;

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.area}>
      <CardContent>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
          WELCOME ON BOARD 🚀
        </Typography>
      </CardContent>
      </CardContent>
        <Typography className={classes.drivers}
         variant="h5" component="h5">
          <Box fontWeight="fontWeightBold" m={4}>What are your drivers ?</Box>
        </Typography>
        <CardMedia
          component="img"
          className={classes.img}
          alt={match.params.company}
          width="25"
          image={APIlogo}
          title={match.params.company}
        />
        <CardContent>

          <Typography textAlign="left" paragraph variant="h7" component="h7">
              Please give a score to the folowing driver by importance
              from a low level of importance to a high one.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(Welcome);
