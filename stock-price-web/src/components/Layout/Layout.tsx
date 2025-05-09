import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import { theme } from "../../theme";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container
          component="main"
          sx={{
            mt: 4,
            mb: 4,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
