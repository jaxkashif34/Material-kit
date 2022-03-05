import React from "react";
import { Stack, Button, Divider, Typography } from "@mui/material";
import Iconify from "components/Iconify";

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <Button fullWidth size="large" variant="outlined" color="inherit">
          <Iconify
            icon="eva:google-fill"
            height={24}
            color="#DF3E30"
          />
        </Button>

        <Button fullWidth size="large" variant="outlined" color="inherit">
          <Iconify
            icon="eva:facebook-fill"
            height={24}
            color="#1877f2"
          />
        </Button>

        <Button fullWidth size="large" variant="outlined" color="inherit">
          <Iconify
            icon="eva:twitter-fill"
            height={24}
            color="#1c9cea"
          />
        </Button>
      </Stack>
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
