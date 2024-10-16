import { Divider, Flex, SkeletonCircle, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCloudDownloadAlt, FaEye } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';

function SkeletonPhotoInfo() {
    return (
        <Flex w={"full"} flexDirection={"column"} bg={"gray.400"}
            justifyContent={"center"} alignItems={"flex-start"} gap={2}
        >
            <Flex w={"full"} flexDirection={"column"} pl={2}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Author</Text>
                <Flex w={"full"} justifyContent={"space-evenly"} gap={2}>
                    <SkeletonCircle width={"48px"} height={"48px"} border={"2px solid blue"}/>
                    
                    <Flex flexDirection={"column"} mx={2}
                        justifyContent={"space-between"} alignItems={"flex-start"}
                    >
                        <Skeleton width={"160px"} height={"16px"} />
                        <Skeleton width={"100px"} height={"10px"} />

                    </Flex>
                </Flex>

                <Skeleton mx={"10%"} width={"80%"} height={"40px"}  />
            </Flex>
            <Divider my={3}/>

            <Flex w={"full"} flexDirection={"column"} pl={2}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Photo</Text>
                <Flex w={"full"} flexDirection={"column"} mx={2} gap={2}
                    justifyContent={"space-between"} alignItems={"flex-start"}
                >
                    <Skeleton w={"200px"} height={"16px"} />
                    <Skeleton w={"80%"} mr={"10%"} height={"40px"} />

                    <Flex w={"full"} className="photo-reactions" justifyContent={"space-evenly"} alignItems={"center"}>
                        <Flex className='photo-view' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaEye title='Photo Views' />
                            <Skeleton w={"40px"} height={"20px"} />
                        </Flex>

                        <Flex className='photo-download' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaCloudDownloadAlt title='Photo Downloads' />
                            <Skeleton w={"40px"} height={"20px"} />
                        </Flex>

                        <Flex className='photo-likes' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaHeartPulse title='Photo Likes' />
                            <Skeleton w={"40px"} height={"20px"} />
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            <Divider my={3}/>

        </Flex>
    );
}

export default SkeletonPhotoInfo;