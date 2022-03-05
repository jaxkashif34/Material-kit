import React from "react";
import { Card, Box, Stack, Link, Typography } from "@mui/material";
import Label from "components/Label";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { fCurrency } from "utils/formatNumber";
import ColorPreview from "components/ColorPreview";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export default function ProductCard({ products }) {
  const { name, cover, price, colors, status, priceSale } = products;
  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "sale" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              variant="body1"
              component="span"
              sx={{ color: "text.disabled", textDecoration: "line-through" }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
