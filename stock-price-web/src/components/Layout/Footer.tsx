import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Divider />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} StockVision
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Real-time stock analytics platform
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
