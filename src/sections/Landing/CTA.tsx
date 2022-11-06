import React from 'react';
import { Heading, Button, Text, Image, VStack } from '@chakra-ui/react';
import codingPenguin from '../../../assets/images/penguin.webp';

const CTA = () => (
    <VStack
        marginInline={{
            base: '16px',
            md: '32px',
        }}
        marginBlockStart="50px"
    >
        <Image maxHeight="350px" src={codingPenguin} alt="Image of Penguin with a Laptop" />

        <Heading
            fontSize={{
                base: '48px',
                md: '72px',
            }}
            fontFamily="Chillax"
            fontWeight="semibold"
        >
            winterhack
        </Heading>

        <Text
            fontFamily="Chillax"
            fontWeight="medium"
            textAlign="center"
            fontSize="16px"
            style={{
                marginTop: '-10px',
            }}
        >
            melt the snow
        </Text>
        <Text fontFamily="Chillax" textColor="#040204" fontWeight="medium" fontSize="22px">
            Dec 2-4, 2022
        </Text>
        <Button
            width="200px"
            height="50px"
            borderRadius="5px"
            transition="all 0.2s"
            backgroundColor="white"
            filter="drop-shadow(0px 4px 4px #CAD6EC)"
            _hover={{
                filter: 'drop-shadow(0px 2px 4px #9096CD)',
            }}
            _active={{
                backgroundColor: 'white',
                filter: 'drop-shadow(0px 0px 0px #9096CD)',
            }}
        >
            <Text fontFamily="Chillax" fontSize="18px" fontWeight="semibold">
                Register Now
            </Text>
        </Button>
    </VStack>
);
export default CTA;
