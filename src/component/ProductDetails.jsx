import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Rating } from "@mui/material";

export const ProductDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectData = useSelector((state)=>state.productReducer.details);

    const handleAddCart=(selectData)=>{
        const type = "P_CART" ;
        const payload = selectData ;
        const action = {type, payload};
        dispatch(action);
        navigate("/cart");
    }

    const handleDelete=(index)=>{
        const type = "REMOVE" ;
        const payload = index ;
        const action = {type, payload};
        dispatch(action);
        navigate("/");
    }

    return (
        <Grid container spacing={2} marginTop={1}>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={5} align="center">
                <img height={350} width={350} src={selectData.image} alt="" />
                <br />
                <br />
                <Button onClick={()=>handleAddCart(selectData)} sx={{height:55}} variant="contained" color="warning">Add to Cart</Button>
                <Button onClick={()=>handleDelete(selectData.index)} sx={{marginLeft:"30px", width:"120px", height:55}} variant="contained" color="error">Remove</Button>
            </Grid>
            <Grid item xs={7} padding={3}>
                <h3>{selectData.title}</h3>
                <Rating value={selectData.rating.rate} />
                <br />  
                <span style={{color:"Green", fontWeight:"bold"}}>Special Price</span>
                <br />
                <h1>₹ {selectData.price}</h1>
                {/* <span style={{fontWeight:"bold"}}>Available Offers</span> */}
                <p>{selectData.description}</p>
            </Grid>
        </Grid>
    );
}