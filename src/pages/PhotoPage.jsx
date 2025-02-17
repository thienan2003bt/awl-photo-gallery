import { Button, Flex, Image, Skeleton} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import PhotoInfo from "../components/photos/PhotoInfo";
import usePhotoService from "../hooks/services/usePhotoService";
import SkeletonPhotoInfo from "../components/photos/SkeletonPhotoInfo";

function PhotoPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {getPhotoById} = usePhotoService();

    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // Fetch photo data by id whenever component did mount or /:id changed
    useEffect(() => {
        const fetchPhoto = async () => {
            setIsLoading(true);
            const response = await getPhotoById(id);
            if(response) {
                setPhoto(response);
            }
            setIsLoading(false);
        }

        fetchPhoto();
    }, [id]);

    // Handle keydown event
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                navigate('/photos');
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <Flex w={"100vw"} height={"100vh"} 
            flexDirection={{
                base: "column",
                xl: "row",
            }} 
            justifyContent={"stretch"} gap={{base: 1, xl: 5}}  p={0} 
            overflowY={"auto"} overflowX={"hidden"}
        >
            <Flex flex={{base: 1, xl: 7}} className="photo-screen" bg={"gray.dark"} 
                position={"relative"} justifyContent={"center"} alignItems={"center"}
            >
                {isLoading === true
                ? <Skeleton h={{base: "40vh", xl: "100vh"}} w={"80%"} />
                : <Image src={photo?.urls?.full} w={"80%"} h={{base: "40vh", xl: "100vh"}} />
                }
                
                <Button position={"absolute"} left={3} top={3}
                    p={0} margin={0} borderRadius={"100%"} bg={"gray.600"} 
                    onClick={() => navigate("/photos")} _hover={{backgroundColor: "gray.600", opacity: 0.8}}
                >
                    <RiCloseCircleFill size={24} />
                </Button>
            </Flex>

            <Flex  flex={{base: 1, xl: 3}}>

            {isLoading === true
            ? <SkeletonPhotoInfo />
            : <PhotoInfo photo={photo} />
            }
            </Flex>
        </Flex>
    );
}

export default PhotoPage;