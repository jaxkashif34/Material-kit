import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Link, Card, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Page from "components/Page";
import AuthLayout from "layouts/AuthLayout";
import AuthSocial from "sections/authentication/AuthSocial";
import RegisterForm from "sections/authentication/register/RegisterForm";

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  // backgroundColor: "skyblue",
  maxWidth: 464,
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  // background: "skyblue",
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  return (
    <RootStyle>
      <AuthLayout>
        Already have an account? &nbsp;
        <Link
          variant="subtitle2"
          underline="none"
          component={RouterLink}
          to="/login"
        >
          Login
        </Link>
      </AuthLayout>
      <SectionStyle>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Manage the Job more efficiently with Material
        </Typography>
        <img
          alt="register"
          src="/static/illustrations/illustration_register.png"
        />
      </SectionStyle>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started absolutely Free
            </Typography>
            <Typography>Free forever. no credit card neended</Typography>
          </Box>
          <AuthSocial />
          <RegisterForm />
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            By Registering, I agree to Material&nbsp;
            <Link underline="always" color="textPrimary">
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" color="textPrimary">
              Privasy Policy
            </Link>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 3, textAlign: "center", display: { sm: "none" } }}
          >
            Already have an account? &nbsp;
            <Link underline="hover" to="/login" component={RouterLink}>
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
