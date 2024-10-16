import React, { useEffect, useState } from 'react';
import { Box, Spinner, Center, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePhotoService from '../hooks/services/usePhotoService';
import PhotoGrid from '../components/photos/ProtoGrid';

const HomePage = () => {
    const IMAGE_PER_PAGE = 12;

    const { getPhotos } = usePhotoService();

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [havingMore, setHavingMore] = useState(true);

    // Initial fetch data at did mount
    useEffect(() => {
        fetchImages();
    }, []);
    
    
    const fetchImages = async () => {
        const newImages = await getPhotos(page, IMAGE_PER_PAGE);
        if(newImages?.length === 0) {
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
        <Box w={"full"} mx={0} mt={3} h="90vh" overflow="hidden">
            <InfiniteScroll
                dataLength={images?.length}
                next={fetchImages}
                hasMore={havingMore}
                loader={<Center><Spinner size={24} /></Center>}
                endMessage={<Center>
                        <Text fontWeight={"bold"} fontStyle={"italic"}>You have reached the end of gallery!</Text>
                    </Center>
                }
                height={"80vh"}
            >
                <Flex flexDirection={"column"} 
                    bg={useColorModeValue("gray.light", "gray.dark")}
                    p={2} gap={1}
                    alignItems={"center"} justifyContent={"center"}
                >
                    <PhotoGrid images={images}/>
                </Flex>
            </InfiniteScroll>
        </Box>
    );
};

export default HomePage;