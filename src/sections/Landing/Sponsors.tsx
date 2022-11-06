import { Button, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Sponsor } from '../../components';
import ICET from '../../../assets/images/sponsors/ICET.png';

const Sponsors = () => (
    <VStack marginInline="36px" marginBlock="72px">
        <Heading marginBlockEnd="36px" fontSize="64px" fontFamily="Chillax" fontWeight="400">
            our sponsors
        </Heading>
        <Sponsor logo={ICET} type="venue partner" />
        <Flex
            backgroundColor="rgba(190, 193, 221, 0.7)"
            width="70vw"
            justifyContent="space-between"
            paddingInline="36px"
            columnGap="36px"
            paddingBlock="36px"
            boxShadow="0px 4px 97px 5px #B9B0CD"
            borderRadius="10px"
            style={{
                backdropFilter: 'blur(10px)',
            }}
        >
            <Heading fontFamily="Chillax" fontSize="36px" fontWeight="400">
                be a sponsor
            </Heading>
            <Button width="250px" height="50px">
                <Text fontFamily="Chillax" fontSize="18px" fontWeight="semibold">
                    Sponsorship Brochure
                </Text>
            </Button>
        </Flex>
    </VStack>
);

export default Sponsors;
