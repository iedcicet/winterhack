import { Flex, HStack, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.svg';

const NavBar = () => (
    <Flex
        as="nav"
        width="100vw"
        justifyContent="space-between"
        alignItems="align-items"
        position="fixed"
        paddingInline={{ base: '16px', md: '32px' }}
        zIndex="3"
        background="rgba(255, 255, 255, 0.09)"
        paddingBlock="16px"
        backdropFilter="blur(10px)"
    >
        <Link href="/">
            <Image src={logo} alt="logo" height="50px" />
        </Link>
        <HStack spacing="18px">
            <Link href="/timeline">
                <Text fontFamily="Chillax" fontSize="20px" textColor="#040204">
                    timeline
                </Text>
            </Link>
            <Link href="/faq">
                <Text fontFamily="Chillax" fontSize="20px" textColor="#040204">
                    faq
                </Text>
            </Link>
            <Link href="/contact">
                <Text fontFamily="Chillax" fontSize="20px" textColor="#040204">
                    contact
                </Text>
            </Link>
        </HStack>
    </Flex>
);
export default NavBar;
