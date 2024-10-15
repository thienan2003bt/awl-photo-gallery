import { Flex, Text } from "@chakra-ui/react";

function Header() {
    return (
        <Flex w={"full"} px={2} justifyContent={"space-between"}>
            <Text>IA02</Text>
            <Text fontSize={24} fontWeight={"bold"}>Photo Gallery</Text>
            <Text>Advanced Web Development</Text>
        </Flex>
    );
}

export default Header;