import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaCloudDownloadAlt, FaEye } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';

function PhotoInfo({ photo }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            id: photo.user?.id,
            username: photo.user?.username,
            name: photo.user?.name,
            bio: photo.user?.bio,
            avatar: photo.user?.profile_image?.medium ?? photo.user?.profile_image?.small,
        });
    }, [photo])

    return (
        <Flex w={"full"} flexDirection={"column"} bg={"gray.400"}
            justifyContent={"center"} alignItems={"flex-start"} gap={2}
        >
            <Flex w={"full"} flexDirection={"column"} pl={2}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Author</Text>
                <Flex w={"full"} justifyContent={"space-evenly"} gap={2}>
                    <Avatar src={user.avatar} width={"48px"} height={"48px"} border={"2px solid blue"}/>
                    
                    <Flex flexDirection={"column"} mx={2}
                        justifyContent={"space-between"} alignItems={"flex-start"}
                    >
                        <Text fontWeight={"bold"} fontSize={18}>{user?.name}</Text>
                        <Text fontWeight={"thin"} fontSize={16}>{user?.username}</Text>

                    </Flex>
                </Flex>

                <Text fontSize={14}>{user?.bio}</Text>
            </Flex>
            <Divider my={3}/>

            <Flex w={"full"} flexDirection={"column"} pl={2}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Photo</Text>
                <Flex flexDirection={"column"} mx={2} gap={2}
                    justifyContent={"space-between"} alignItems={"flex-start"}
                >
                    <Text fontWeight={"bold"} fontSize={18}>
                        Title: {photo?.title ?? "Photo title placeholder"}
                    </Text>
                    <Text fontWeight={"thin"} fontSize={16}>
                        Description: {photo?.description ?? photo?.alt_description ?? "Photo description placeholder"}
                    </Text>

                    <Flex w={"full"} className="photo-reactions" justifyContent={"space-evenly"} alignItems={"center"}>
                        <Flex className='photo-view' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaEye title='Photo Views' />
                            <Text>{photo?.views}</Text>
                        </Flex>

                        <Flex className='photo-download' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaCloudDownloadAlt title='Photo Downloads' />
                            <Text>{photo?.downloads}</Text>
                        </Flex>

                        <Flex className='photo-likes' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaHeartPulse title='Photo Likes' />
                            <Text>{photo?.likes}</Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            <Divider my={3}/>

        </Flex>
    );
}

export default PhotoInfo;