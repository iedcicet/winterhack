import React from 'react';
import { HStack, VStack, Heading, Text, Image } from '@chakra-ui/react';
import skating from '../../../assets/images/skating.png';

const Why = () => (
    <HStack
        marginInline={{
            base: '16px',
            md: '32px',
        }}
        marginBlock="36px"
    >
        <VStack alignItems="flex-start">
            <Heading
                fontSize={{
                    base: '36px',
                    md: '52px',
                }}
                fontFamily="Chillax"
                fontWeight="600"
            >
                Be Part of this awesome journey!
            </Heading>
            <Text
                textColor="#363636"
                fontFamily="Chillax"
                fontSize={{
                    base: '18px',
                    md: '36px',
                }}
            >
                30K+ Prizes <br />
                Awesome Swags <br />
                Internship opportunities <br />
                Sessions with industry experts
            </Text>
        </VStack>
        <Image
            display={{
                base: 'none',
                md: 'block',
            }}
            maxHeight="400px"
            src={skating}
            alt="Image of a penguin skating"
        />
    </HStack>
);
export default Why;
