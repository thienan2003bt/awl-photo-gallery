import { useToast } from "@chakra-ui/react"

// Custom hook for showing toast messages

function useShowToast() {
    const toast = useToast();
    const showToast = (title, description, status, duration = 3000) => {
        toast({title, description, status, duration, isClosable: true, position: 'bottom-right'});
    }

    return showToast;
}


export default useShowToast;