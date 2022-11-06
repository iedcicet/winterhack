import { Flex } from '@chakra-ui/react';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <Flex alignItems="center" flexDirection="column">
        {children}
    </Flex>
);
export default Layout;
