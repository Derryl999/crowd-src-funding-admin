import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { NavLink } from "react-router-dom";
// import "./UserPayment.css";

import img1 from "../Images/request.svg";
import img2 from "../Images/post.svg";
import img3 from "../Images/transaction.svg";
import img4 from "../Images/community.svg";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    width: "275px",
    display: "inline",
    borderRadius: "15px",
    height: "250px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "#83eaea",
    position: "relative",
    float: "left",
    margin: "20px",
    // marginLeft:"8px",
    // marginRight:"15px",
  },
  media: {
    paddingTop: "56.25%",
    // paddingTop: '40%',
    backgroundBlendMode: "darken",
  },
  title: {
    padding: "0 16px",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: "15px",
    textTransform: "uppercase",
    textShadow: "2px 2px 4px #000000",
  },
  button: {
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "white",
  },
  main: {
    width: "45%",
    height: "300px",
    display: "inline",
    borderRadius: "15px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "#83eaea",
    position: "relative",
    float: "left",
    margin: "20px",
  },
  details: {
    marginTop: "100px",
    textAlign: "center",
  },
  form:{
      width:"70%",
    //   marginTop:"20%"
    padding:"5%",
    margin:"10%",
    boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign:"center",
  },
inp:{
    boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign:"center",
    textShadow: "1px 1px 1px #000000",

  },
btn:{
    marginTop:"30px",
    border: "2px solid #F4B400",
    backgroundColor:"#ad973f",
    color:"black",
    width:"30%",
    padding:"8px",
    borderRadius: "28px",
    fontSize:"28px",
    fontWeight: "600",
    letteSpacing:" 3px",
},

});
function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      

      <div>
        <Card className={classes.main}>
          <div className={classes.details}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Rs 100000.00
            </Typography>
            <Typography className={classes.title} variant="h5" gutterBottom>
              view all your trasactions
            </Typography>
          </div>
        </Card>

        <Card className={classes.main}>
            <form className={classes.form}>
              <input type="text" size="12" placeholder="Enter the Amount"  className={classes.inp}/>
              
              <Button className={classes.btn}>Pay</Button>
            </form>
        </Card>
      </div>

      <div className={classes.cardContainer}>
      <Card className={classes.root}>
        <NavLink to="/">
          <CardMedia className={classes.media} image={img1} />
          <Typography className={classes.title} variant="h5" gutterBottom>
            Request handle
          </Typography>
        </NavLink>
      </Card>
      <Card className={classes.root}>
        <NavLink to="/">
          <CardMedia className={classes.media} image={img2} />
          <Typography className={classes.title} variant="h5" gutterBottom>
            post story
          </Typography>
        </NavLink>
      </Card>
      <Card className={classes.root}>
        <NavLink to="/">
          <CardMedia className={classes.media} image={img3} />
          <Typography className={classes.title} variant="h5" gutterBottom>
            Transaction by people
          </Typography>
        </NavLink>
      </Card>
      <Card className={classes.root}>
        <NavLink to="/">
          <CardMedia className={classes.media} image={img4} />
          <Typography className={classes.title} variant="h5" gutterBottom>
            transaction to community
          </Typography>
        </NavLink>
      </Card>
      </div>
    </div>
  );
}

export default Dashboard;
