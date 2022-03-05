import {
  ProductFilterSidebar,
  ProductSort,
  ProductList,
  ProductCartWidget,
} from "sections/@dashboard/products";
import { useState } from "react";
import Page from "components/Page";
import { useFormik } from "formik";
import { Container, Stack, Typography } from "@mui/material";
import PRODUCTS from "_mocks_/products";

export default function Products() {
  const [openFilter, setopenFilter] = useState(false);
  const formik = useFormik({
    initialValues: {
      gender: "",
      category: "",
      colors: "",
      priceRange: "",
      rating: "",
    },
    onSubmit: () => {},
  });
  const handleOpenFilter = () => {
    setopenFilter(true);
  };
  const handleCloseFilter = () => {
    setopenFilter(false);
  };
  return (
    <Page title="Products | Material-Kit">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 5 }}>
          <ProductFilterSidebar
            formik={formik}
            isOpenFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
          <ProductSort />
        </Stack>
        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
