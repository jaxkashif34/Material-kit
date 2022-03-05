import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((prdct) => {
        return (
          <Grid key={prdct.id} item xs={12} sm={6} md={3}>
            <ProductCard products={prdct} />
          </Grid>
        );
      })}
    </Grid>
  );
}
