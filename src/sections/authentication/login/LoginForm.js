import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { FormikProvider, Form, useFormik } from "formik";
import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "components/Iconify";
import * as yup from "yup";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        navigate("/dashboard/app", { replace: true });
      }, 1000);
    },
  });
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const { getFieldProps, touched, values, errors, isSubmitting } = formik;
  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off">
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="usename"
            type="email"
            label="Email Address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
          />
          <Link
            underline="hover"
            variant="subtitle2"
            component={RouterLink}
            to="#"
          >
            Forgot Password ?
          </Link>
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
