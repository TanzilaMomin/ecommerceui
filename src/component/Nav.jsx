import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, TextField, Button, Card, CardContent, IconButton, Badge } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Nav = ({setSearch}) => {
    const cartData= useSelector((state)=>state.productReducer.cart)
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" />
                    </Grid>
                    <Grid item xs={6}>                       
                        < TextField onChange={(e)=>setSearch(e.target.value)} InputProps={{startAdornment:(<IconButton><SearchIcon /></IconButton>)}}  variant="outlined" placeholder=" Search for Products, Brands and More" fullWidth />
                    </Grid>
                    <Grid item xs={2}>
                        <Button sx={{height:55}} fullWidth><AccountCircleOutlinedIcon />Login</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/cart">
                        <Badge  badgeContent={cartData&& cartData.length} color="success">
                        <Button sx={{height:55}} ><ShoppingCartOutlinedIcon />cart</Button>
                        </Badge>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}