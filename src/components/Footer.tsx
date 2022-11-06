import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import iedcicet from '../../assets/images/IEDC_ICET.webp';

const Footer = () => (
    <HStack
        as="footer"
        width={{
            base: '100%',
            md: '90%',
        }}
        marginInline={{
            base: '16px',
            md: '32px',
        }}
        paddingBlock="18px"
        justifyContent="space-between"
    >
        <Image
            display={{
                base: 'none',
                md: 'block',
            }}
            src={iedcicet}
            loading="lazy"
            alt="Image of IEDC ICET Logo"
        />
        <Text
            width="100%"
            fontSize={{ base: '14px', md: '18px' }}
            fontFamily="Chillax"
            textAlign="center"
        >
            © 2022 IEDC ICET. All rights reserved
        </Text>
        <Text
            fontSize="18px"
            fontFamily="Chillax"
            display={{
                base: 'none',
                md: 'block',
            }}
        >
            Made with ❤️ by IEDC ICET
        </Text>
    </HStack>
);

export default Footer;
