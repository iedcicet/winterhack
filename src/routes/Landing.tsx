import { Image } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layout';
import { CTA, Sponsors, Why } from '../sections/Landing';
import bg from '../../assets/images/bg.png';

const Landing = () => (
    <Layout>
        <Image
            objectFit="cover"
            height="100%"
            zIndex="-2"
            src={bg}
            position="absolute"
            top="1px"
            alt="Background Image for winterhack"
            opacity="1"
        />
        <CTA />
        <Why />
        <Sponsors />
    </Layout>
);
export default Landing;
