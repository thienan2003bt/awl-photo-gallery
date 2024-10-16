import React, { useEffect, useState } from 'react';
import { Box, Image, Spinner, Center, Text, Grid, GridItem, Flex, useColorModeValue } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import usePhotoService from '../hooks/services/usePhotoService';

const HomePage = () => {
    const IMAGE_PER_PAGE = 12;

    const navigate = useNavigate();
    const { getPhotos } = usePhotoService();

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [havingMore, setHavingMore] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);
    
    
    const fetchImages = async () => {
        const newImages = await getPhotos(page, IMAGE_PER_PAGE);
        console.log("newImages", newImages);
        if(newImages?.length === 0) {
            console.log("Set havingMore to false");
            return setHavingMore(false);
        }
        
        if(images.length === 0) {
            setImages(newImages);
        } else {
            setImages([...images, ...newImages]);
        }
        setPage(page + 1);
        setHavingMore(true);
    };

    return (
        <Box w={"full"} mx={0} mt={3} h="85vh" overflow="hidden">
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={havingMore}
                loader={<Center><Spinner  /></Center>}
                endMessage={<Center>
                        <Text fontWeight={"bold"} fontStyle={"italic"}>You have reached the end of gallery!</Text>
                    </Center>
                }
                height={"80vh"}
            >
                <Flex flexDirection={"column"} gap={1} bg={useColorModeValue("gray.light", "gray.dark")}
                    p={2} alignItems={"center"} justifyContent={"center"}
                >
                    <Grid w={"90%"} mx={"5%"}
                        templateColumns={{
                            sm: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                            xl: "repeat(4, 1fr)",
                            '2xl': "repeat(5, 1fr)"
                        }}
                        placeItems={"center"}
                        gap={2} spacing={2} p={1}>
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
                </Flex>
            </InfiniteScroll>
        </Box>
    );
};

export default HomePage;