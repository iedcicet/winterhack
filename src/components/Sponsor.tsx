import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface SponsorProps {
    logo: string;
    type: string;
}

const Sponsor = ({ logo, type }: SponsorProps) => (
    <VStack
        style={{
            marginBlock: '72px',
        }}
    >
        <Image height="80px" src={logo} alt="Company Name" />
        <Text fontSize="24px" fontFamily="Chillax">
            {type}
        </Text>
    </VStack>
);
export default Sponsor;
