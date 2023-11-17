import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Grid, Card, CardContent, Button} from "@mui/material";

export const Cart=()=>{
    const [data, setData]=useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const selectCart = useSelector((state)=>state.productReducer.cart);

    useEffect(()=>{
        setData(selectCart)
    },[]);

    const handleClick=()=>{
        navigate("/");
    }
    const handleDelete=(index)=>{
        const type = "REMOVE" ;
        const payload = index;
        const action = {type, payload};
        dispatch(action);
        navigate("/");
    }

    return(
        <Grid container spacing={2} marginTop={2}>
            {
                data.map((item,index)=>{
                    return(
                       <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={2}>
                                        <img onClick={handleClick} height={150} width={150} src={item.image} alt="" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <h1>₹ {item.price}</h1>
                                        <h3>{item.title.slice}</h3>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <p>{item.description.slice(0,200)}</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button onClick={()=>handleDelete(index)} variant="contained" fullWidth color="error">Delete</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                       </Grid> 
                    )
                })
            }
        </Grid>
    );
}