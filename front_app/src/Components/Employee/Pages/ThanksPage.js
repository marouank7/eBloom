import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom'

import DisplayEmployeeView from '../Layouts/DisplayEmployeeView'
import ThankYou from '../../Core/KickOff/ThankYou'

const ThanksPage = ({match, ...rest}) => {


    // const { match } = rest
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


    const classes = useStyles();
    const [APIlogo, setAPIlogo] = React.useState("");
    React.useEffect( () => setAPIlogo(`https://logo.clearbit.com/${match.params.company}.com`), [match.params.company]) ;




      return(
        <DisplayEmployeeView {...rest}>
          <div className="page-content">
              <ThankYou {...rest}/>
          </div>
        </DisplayEmployeeView>
      )

}

export default withRouter(ThanksPage);
