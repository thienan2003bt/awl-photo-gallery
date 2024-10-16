import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";

function Header() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex w={"full"} px={2} justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"center"} gap={3} alignItems={"center"}>
                <Button m={0} p={1} borderRadius={"100%"} onClick={() => toggleColorMode()}>
                    <BsMoonStarsFill fill={colorMode === "light" ? "black" : "yellow"} />
                </Button>
                <Text>IA02</Text>

            </Flex>
            <Text fontSize={32} fontWeight={"bold"}>Photo Gallery</Text>
            <Text>Advanced Web Development</Text>
        </Flex>
    );
}

export default Header;