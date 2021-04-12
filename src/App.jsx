import React, { useState, useEffect } from "react";
import "./App.css";
import { Box, Heading, Link } from "@chakra-ui/react";
function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <Heading pb="10" color="gray.200">
        chakraui + react + snowpack
      </Heading>
      <Box className="App-header">
        <img className="logo " src="assets/chakraui-logo.png" alt="" />
        <img className="logo rotate" src="assets/reactjs-logo.svg" alt="" />
        <img className="logo" src="assets/snowpack-logo.png" alt="" />
      </Box>
    </div>
  );
}

export default App;
