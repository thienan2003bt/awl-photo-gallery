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
            avatar: photo.user?.profile_image?.large ?? photo.user?.profile_image?.medium ?? photo.user?.profile_image?.small,
        });
    }, [photo])

    return (
        <Flex w={"full"} 
            flexDirection={"column"} 
            bg={"gray.dark"}
            justifyContent={"center"} alignItems={"flex-start"} gap={1}
        >
            <Divider my={{base: 1, lg: 3}}/>

            <Flex w={"full"} flexDirection ={"column"} pl={2}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Author</Text>
                <Flex w={"full"} justifyContent={"space-evenly"} gap={2}>
                    <Avatar src={user.avatar} width={"80px"} height={"80px"} border={"2px solid blue"}/>
                    
                    <Flex flexDirection={"column"} mx={2}
                        justifyContent={"space-evenly"} alignItems={"flex-start"}
                    >
                        <Text color={"white"} fontWeight={"bold"} fontSize={18}>{user?.name}</Text>
                        <Text color={"white"} fontWeight={"thin"} fontSize={16}>{user?.username}</Text>

                    </Flex>
                </Flex>

                <Text color={"white"} fontSize={14}>Bio: {user?.bio ?? "Bio placeholder."}</Text>
            </Flex>
            <Divider my={{base: 1, lg: 3}}/>

            <Flex w={"full"} flexDirection={"column"} px={{sm: 0, md: 1, lg: 2}}
                justifyContent={"center"} alignItems={"flex-start"} gap={4}
            >
                <Text fontSize={20} fontWeight={"bold"} color={"white"}>Photo</Text>
                <Flex w={"full"} flexDirection={"column"} mx={2} gap={2}
                    justifyContent={"space-between"} alignItems={"flex-start"}
                >
                    <Text color={"white"} fontWeight={"bold"} fontSize={18}>
                        Title: {photo?.title ?? "Photo title placeholder."}
                    </Text>
                    <Text color={"white"} fontWeight={"thin"} fontSize={16}>
                        Description: {photo?.description ?? photo?.alt_description ?? "Photo description placeholder."}
                    </Text>

                    <Flex w={"full"} className="photo-reactions" justifyContent={"space-evenly"} alignItems={"center"}>
                        <Flex className='photo-view' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaEye fill='white' title='Photo Views' />
                            <Text color={"white"}>{photo?.views}</Text>
                        </Flex>

                        <Flex className='photo-download' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaCloudDownloadAlt fill='white' title='Photo Downloads' />
                            <Text color={"white"}>{photo?.downloads}</Text>
                        </Flex>

                        <Flex className='photo-likes' alignItems={"center"} gap={1} justifyContent={"center"}>
                            <FaHeartPulse fill='white' title='Photo Likes' />
                            <Text color={"white"}>{photo?.likes}</Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            <Divider my={{base: 1, lg: 3}}/>

        </Flex>
    );
}

export default PhotoInfo;