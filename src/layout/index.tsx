import { Flex } from '@chakra-ui/react';
import React from 'react';

const NavBar = React.lazy(() => import('../components/NavBar'));
const Footer = React.lazy(() => import('../components/Footer'));

const Layout = ({ children }: { children: React.ReactNode }) => (
    <Flex alignItems="center" flexDirection="column" minHeight="100vh">
        <NavBar />
        {children}
        <Footer />
    </Flex>
);
export default Layout;
