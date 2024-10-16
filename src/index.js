import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import themeConfig from './configs/theme.config';
import { BrowserRouter } from 'react-router-dom';

// Using Theme UI configuration imported from configs folder
const theme  = extendTheme(themeConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <ColorModeScript initialColorMode={themeConfig.configs.initialColorMode} />
            <App />
        </BrowserRouter>
    </ChakraProvider>
);