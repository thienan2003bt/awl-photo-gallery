import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function MainLayout() {
    return (
        <Flex w={"90vw"} mx={"5vw"} flexDirection={"column"} justifyContent={"space-between"} gap={3}>
            <Header />

            <Outlet />

            <Footer />
        </Flex>
    );
}

export default MainLayout;