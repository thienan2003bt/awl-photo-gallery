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
        <Box w={"full"} mx={0}>
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={havingMore}
                loader={<Center><Spinner /></Center>}
                endMessage={<Center>
                        <Text fontWeight={"bold"} fontStyle={"italic"}>You have reached the end of gallery!</Text>
                    </Center>
                }
            >
                <Grid w={"full"} templateColumns={"repeat(6, 1fr)"} spacing={4} p={1} overflow={"hidden"}>
                    {images?.map((image, index) => (
                        <GridItem as={Box} key={`photo-${index}`} borderRadius="md">
                            <Image src={image?.urls?.small} alt={image?.alt_description}
                                cursor={"pointer"}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </InfiniteScroll>
        </Box>
    );
};

export default HomePage;