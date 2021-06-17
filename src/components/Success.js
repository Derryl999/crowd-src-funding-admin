import React from 'react'
import img from "../Images/success2.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
  } from "@material-ui/core/";
const useStyles = makeStyles({

    btn:{
        marginTop:"30px",
        border: "2px solid #190c8d",
        backgroundColor:"#3d358a",
        color:"white",
        width:"30%",
        padding:"8px",
        borderRadius: "28px",
        fontSize:"28px",
        fontWeight: "600",
        letteSpacing:" 3px",
    },
    
    content:{
        textAlign:"center",
        marginLeft:"25%",
        marginRight:"25%",
    }
})
function Success() {
  const classes = useStyles();
    return (
        <div className={classes.content}>
            <img src={img} alt="" height="400px" width="400px" />
            <h2>Congratulations, your account has been successfully created</h2>
            <Button className={classes.btn}>Continue</Button>
        </div>
    )
}

export default Success
