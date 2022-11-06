import { HStack, VStack, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import codingPenguin from '../../../assets/images/penguin.png';

const Why = () => (
    <HStack marginInline="36px">
        <VStack alignItems="flex-start">
            <Heading fontSize="64px" fontFamily="Chillax" fontWeight="400">
                why you should hack in winter?
            </Heading>
            <Text textColor="#363636" fontFamily="Chillax" fontSize="36px">
                30K+ Prizes <br />
                Awesome Swags <br />
                Internship opportunities <br />
                Sessions with industry experts
            </Text>
        </VStack>
    </HStack>
);
export default Why;
