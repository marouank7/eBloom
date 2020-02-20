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

const ThankYou = ({ match }) => {
  const classes = useStyles();
  const [APIlogo, setAPIlogo] = React.useState("");
  React.useEffect( () => setAPIlogo(`https://logo.clearbit.com/${match.params.company}.com`), [match.params.company]) ;

  return (

              <Card className={classes.root}>
                <CardActionArea className={classes.area}>
                <CardContent>
                </CardContent>
                  <CardMedia
                    component="img"
                    className={classes.img}
                    alt={match.params.company}
                    width="25"
                    image={APIlogo}
                    title={match.params.company}
                  />
                  <Typography className={classes.drivers}
                   variant="h5" component="h5">
                   <Box fontWeight="fontWeightBold" m={4}>Thank you for your participation 🙏</Box>

                  </Typography>
                </CardActionArea>
              </Card>
  );
}

export default withRouter(ThankYou);
