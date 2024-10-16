import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";

function Header() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex w={"full"} px={2} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Flex flex={1} justifyContent={"flex-start"} gap={3} alignItems={"center"}>
                <Button m={0} p={1} borderRadius={"100%"} onClick={() => toggleColorMode()}>
                    <BsMoonStarsFill fill={colorMode === "light" ? "black" : "yellow"} />
                </Button>
                <Text>IA02</Text>

            </Flex>
            <Text textAlign={"center"} flex={1} fontSize={32} fontWeight={"bold"}>Photo Gallery</Text>
            <Text textAlign={"end"} flex={1} >Advanced Web Development</Text>
        </Flex>
    );
}

export default Header;