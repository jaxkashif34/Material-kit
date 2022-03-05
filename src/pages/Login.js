import React from "react";
import Page from "components/Page";
import { styled } from "@mui/material/styles";
import { Card, Link, Typography, Container, Stack } from "@mui/material";
import AuthLAyout from "layouts/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "sections/authentication/AuthSocial";
import LoginForm from "sections/authentication/login/LoginForm";
const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  // background: "skyblue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
  minHeight: "100vh",
}));

export default function Login() {
  return (
    <RootStyle>
      <AuthLAyout>
        Don't have accound ? &nbsp;
        <Link
          component={RouterLink}
          to="/register"
          underline="none"
          variant="subtitle2"
        >
          Get Started
        </Link>
      </AuthLAyout>
      <SectionStyle sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography sx={{ px: 5, mt: 10, mb: 5 }} variant="h3">
          Hi, Welcome Back
        </Typography>
        <img src="/static/illustrations/illustration_login.png" alt="login" />
      </SectionStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack mb={5}>
            <Typography variant="h4" gutterBottom>
              Sign In to Material Kit
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Enter your details here
            </Typography>
          </Stack>
          <AuthSocial />

          <LoginForm />

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3, display: { sm: "none" } }}
          >
            Don't have an account&nbsp;
            <Link
              underline="hover"
              variant="subtitle2"
              component={RouterLink}
              to="/register"
            >
              Get Started
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
