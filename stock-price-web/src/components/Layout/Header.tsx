import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TrendingUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <TrendingUp size={24} className="mr-2" />
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            StockVision
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", gap: isMobile ? 1 : 2 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Typography variant={isMobile ? "body2" : "body1"}>
                Stock Chart
              </Typography>
            </Box>
          </Link>

          <Link
            to="/correlation"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Typography variant={isMobile ? "body2" : "body1"}>
                Correlation Heatmap
              </Typography>
            </Box>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
