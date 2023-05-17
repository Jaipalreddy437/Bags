import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import {Box, Typography} from "@mui/material"

const App = () => {
  useEffect(() => {
    document.title = "React Material Ui - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box>
          <Typography display={"flex"} variant="h3" sx={{p : 2, justifyContent: "center"}}>Our Products</Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>
  );
};

export default App;
