import React from "react";
import {
  Button,
  Drawer,
  Stack,
  Typography,
  IconButton,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Rating,
  Box,
} from "@mui/material";
import Iconify from "components/Iconify";
import { FormikProvider, Form } from "formik";
import Scrollbar from "components/Scrollbar";
import ColorManyPicker from "components/ColorManyPicker";

const FILTER_GENDER_OPTIONS = ["Men", "Women", "Kids"];
const FILTER_CATEGORY_OPTIONS = ["All", "Shose", "Apparel", "Accessories"];
const FILTER_COLOR_OPTIONS = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

const FILTER_PRICE_OPTIONS = [
  { value: "below", label: "Below $25" },
  { value: "between", label: "Between $25 - $75" },
  { value: "above", label: "Above $75" },
];

const FILTER_RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];

export default function ProductFilterSidebar({
  onCloseFilter,
  onOpenFilter,
  isOpenFilter,
  formik,
}) {
  const { values, handleChange, getFieldProps, resetForm } = formik;
  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={onOpenFilter}
        endIcon={<Iconify icon="ic:round-filter-list" />}
      >
        Filters&nbsp;
      </Button>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: "none", overflow: "hidden" },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Filters
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Iconify icon="eva:close-fill" width={20} height={20} />
              </IconButton>
            </Stack>
            <Divider />
            <Scrollbar>
              <Stack spacing={3} sx={{ p: 3 }}>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Gender
                  </Typography>
                  <FormGroup>
                    {FILTER_GENDER_OPTIONS.map((item, index) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...getFieldProps("gender")}
                              value={item}
                              checked={values.gender.includes(item)}
                            />
                          }
                          label={item}
                          key={index}
                        ></FormControlLabel>
                      );
                    })}
                  </FormGroup>
                </div>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Category
                  </Typography>
                  <RadioGroup {...getFieldProps("category")}>
                    {FILTER_CATEGORY_OPTIONS.map((item, index) => {
                      return (
                        <FormControlLabel
                          control={<Radio />}
                          label={item}
                          key={index}
                          value={item}
                        />
                      );
                    })}
                  </RadioGroup>
                </div>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Colors
                  </Typography>
                  <ColorManyPicker
                    name="colors"
                    colors={FILTER_COLOR_OPTIONS}
                    onChange={handleChange}
                    onChecked={(color) => values.colors.includes(color)}
                    sx={{ maxWidth: 38 * 4 }}
                  />
                </div>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Price
                  </Typography>
                  <RadioGroup {...getFieldProps("priceRange")}>
                    {FILTER_PRICE_OPTIONS.map((item, index) => {
                      return (
                        <FormControlLabel
                          control={<Radio />}
                          value={item.value}
                          label={item.label}
                          key={index}
                        />
                      );
                    })}
                  </RadioGroup>
                </div>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Rating
                  </Typography>
                  <RadioGroup {...getFieldProps("rating")}>
                    {FILTER_RATING_OPTIONS.map((item, index) => {
                      return (
                        <FormControlLabel
                          control={
                            <Radio
                              disableRipple
                              color="default"
                              icon={<Rating readOnly value={4 - index} />}
                              checkedIcon={
                                <Rating readOnly value={4 - index} />
                              }
                            />
                          }
                          label="& Up"
                          key={index}
                          value={item}
                          sx={{
                            my: 0.5,
                            borderRadius: 1,
                            "& > :first-of-type": { py: 0.5 },
                            "&:hover": {
                              opacity: 0.48,
                              "& > *": { bgcolor: "transparent" },
                            },
                            ...(values.rating.includes(item) && {
                              bgcolor: "background.neutral",
                            }),
                          }}
                        />
                      );
                    })}
                  </RadioGroup>
                </div>
              </Stack>
            </Scrollbar>
            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={() => {
                  onCloseFilter();
                  resetForm();
                }}
                startIcon={<Iconify icon="ic:round-clear-all" />}
              >
                Clear All
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
