import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from './routes/Landing';
import NavBar from './components/NavBar';
import '../assets/css/chillax.css';

const App = () => (
    <ChakraProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
export default App;
