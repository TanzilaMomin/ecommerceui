import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";

export const Products=({search})=>{
    const [data,setData]=useState([]);
    const [datacopy,setDatacopy]=useState([]);
    const  dispatch=useDispatch();
    const navigate = useNavigate();

    const getData= async ()=>{
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data);
        setDatacopy(result.data);
    };

    useEffect(()=>{
        getData();
    },[]);
    useEffect(()=>{
        const result = data.filter((item)=>
        item.category.toUpperCase().includes(search.toUpperCase()))
        setData(result);
        
    },[search])

    const handleDetail=(item)=>{
        const type = "P_DETAILS" ;
        const payload = item ;
        const action = {type, payload};
        dispatch(action);
        navigate("/proddetails")
    }
    return(
        <Card>
            <CardContent>
                <Grid container spacing={3} align="center">
                    {
                        data.map((item)=>{
                            return(
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <img onClick={()=>handleDetail(item)} height={200} width={200} src={item.image} alt="" />
                                            <h3>{item.title.slice(0,20)}</h3>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}