
import {mode} from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("gray.100", "#18191A")(props),
            margin: "0",
        }
    })
}

const configs = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const colors = {
    gray: {
        light: "#616161",
        dark: "#1e1e1e"
    }
}


const theme = {
    styles,
    configs,
    colors
};
export default theme;