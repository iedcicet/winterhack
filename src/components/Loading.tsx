import { Flex } from '@chakra-ui/react';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loading.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const Loading = () => (
    <Flex minHeight="90vh" minWidth="100vw" justifyContent="center" alignItems="center">
        <Lottie options={defaultOptions} height={100} width={100} />
    </Flex>
);
export default Loading;
