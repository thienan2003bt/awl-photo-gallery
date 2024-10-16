import { Button, Flex, Image, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhotoService from "../services/photo.service";
import { RiCloseCircleFill } from "react-icons/ri";

function PhotoPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPhoto = async () => {
            setIsLoading(true);
            const response = await PhotoService.getPhotoById(id);
            if(response) {
                setPhoto(response);
            }
            setIsLoading(false);
        }

        fetchPhoto();
    }, [id]);


    return (
        <Flex w={"100vw"} height={"100vh"} justifyContent={"stretch"} gap={2} px={"10%"}>
            <Flex flex={15} className="photo-screen" bg={"gray.dark"} 
                position={"relative"} justifyContent={"center"} alignItems={"center"}
            >
                {isLoading === true
                ? <Skeleton h={"100vh"} w={"full"}/>
                : <Image src={photo?.urls?.full} w={"80%"} h={"100vh"} />
                }
                
                <Button position={"absolute"} left={3} top={3}
                    p={0} margin={0} borderRadius={"100%"} bg={"gray.600"} 
                    onClick={() => navigate("/photos")} _hover={{backgroundColor: "gray.600", opacity: 0.8}}
                >
                    <RiCloseCircleFill size={24} />
                </Button>
            </Flex>

            <Flex flex={5} flexDirection={"column"} 
                justifyContent={"center"} alignItems={"flex-start"} gap={2}
            >

            </Flex>
        </Flex>
    );
}

export default PhotoPage;