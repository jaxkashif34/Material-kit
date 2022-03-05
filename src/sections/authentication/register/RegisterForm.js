import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "components/Iconify";
import * as Yup from "yup";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        navigate("/dashboard/app", { replace: true });
      }, 1000);
    },
  });

  const hadleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const { getFieldProps, values, errors, touched, isSubmitting } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="First Name"
              type="text"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label="Last Name"
              type="text"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            label="Email Address"
            type="email"
            autoComplete="username"
            fullWidth
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            {...getFieldProps("password")}
            label="Password"
            fullWidth
            autoComplete="current-password"
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={hadleShowPassword} edge="end">
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} 
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            size="large"
            fullWidth
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
