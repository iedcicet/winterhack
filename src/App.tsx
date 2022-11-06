import React, { Suspense } from 'react';
import '../assets/css/chillax.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Loading from './components/Loading';

const Landing = React.lazy(() =>
    Promise.all([
        import('./routes/Landing'),
        // eslint-disable-next-line no-promise-executor-return
        new Promise((resolve) => setTimeout(resolve, 2000)),
    ]).then(([moduleExports]) => moduleExports),
);

const App = () => (
    <ChakraProvider>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </ChakraProvider>
);
export default App;
