import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProtoGrid({images}) {
    const navigate = useNavigate();



    return (
        <Grid w={"90%"} mx={"5%"}
            templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
                '2xl': "repeat(5, 1fr)"
            }}
            placeItems={"center"}
            gap={2} spacing={2} p={1}
        >
            {images?.map((image, index) => (
                <GridItem w={"250px"} height={"250px"} position={"relative"} as={Box} key={`photo-${index}`} borderRadius="md"
                    cursor={"pointer"} _hover={{ opacity: 0.8 }} onClick={() => navigate("/photos/" + image.id)}
                >
                    <Image w={"250px"} height={"250px"} 
                        src={image?.urls?.thumb} alt={image?.alt_description} loading={"lazy"}
                        borderRadius={"lg"}
                    />

                    <Text w={"full"} textAlign={"center"}  color={"white"} fontSize={"sm"} fontWeight={"bold"}
                        position={"absolute"} bottom={2} left={"50%"} transform={"translateX(-50%)"}
                        _hover={{color: "purple.600"}}
                    >
                        {`${image?.user?.first_name ?? ""} ${image?.user?.last_name ?? ""}`}
                    </Text>
                </GridItem>
            ))}
        </Grid>        
    );
}

export default ProtoGrid;