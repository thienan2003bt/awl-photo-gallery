import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Spinner, Center, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import PhotoService from '../services/photo.service';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
    const IMAGE_PER_PAGE = 12;
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [havingMore, setHavingMore] = useState(true);

    useEffect(() => {
        console.log("Call useEffect");
        fetchImages();
    }, []);
    
    
    const fetchImages = async () => {
        const newImages = await PhotoService.getPhotos(page, IMAGE_PER_PAGE);
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
                loader={<Center><Spinner /></Center>}
                endMessage={<Center>
                        <Text fontWeight={"bold"} fontStyle={"italic"}>You have reached the end of gallery!</Text>
                    </Center>
                }
                height={"80vh"}
            >
                <Flex flexDirection={"column"} gap={1}>
                    <Grid w={"full"} templateColumns={"repeat(5, 1fr)"} spacing={4} p={1}>
                        {images?.map((image, index) => (
                            <GridItem  position={"relative"} as={Box} key={`photo-${index}`} borderRadius="md"
                                cursor={"pointer"} _hover={{ opacity: 0.8 }}
                            >
                                <Image src={image?.urls?.small} alt={image?.alt_description} />

                                <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}
                                    position={"absolute"} bottom={2} left={"50%"} transform={"translateX(-50%)"}
                                >
                                    {`${image.user.first_name ?? ""} ${image.user.last_name ?? ""}`}
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