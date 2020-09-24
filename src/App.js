import React from "react";
import { ThemeProvider, CSSReset, theme, Box, Text } from "@chakra-ui/core";

const App = ({ saludo }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box backgroundColor="gray.500" height="200px">
      <Text
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        fontSize="lg"
        color="#ffffff"
      >
        {saludo}
      </Text>
    </Box>
  </ThemeProvider>
);

export default App;
