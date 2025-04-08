import { BrowserRouter, Route, Routes } from "react-router";
import HomePageLayout from "./Components/HomePageLayout";
import CreatePage from "./Components/CreatePage";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import HomePage from "./Components/HomePage";
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/create-page" element={<CreatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
