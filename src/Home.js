import React from 'react';
import { Box, Button, Image } from "@chakra-ui/react";
import './index.css'


const Home = () => {
    return (
        <Box className='home' height="100%">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                width="55%"
                margin="auto"
                color="white"
                height="87vh"
            >

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box fontFamily="DM Serif Display"
                        fontSize="40px" alignSelf="center">
                        Make new friends, stream your talent, and connect to the world with
                    </Box>
                    <Box fontFamily="DM Serif Display"
                        fontSize="74px" fontStyle="italic" padding="10vh">DeSocial</Box>
                    <Box fontStyle="italic" padding="10px">First fully decentralized social-media platform</Box>
                    <p fontSize="6px" fontStyle="italic">Click on connect to join the platform</p>
                </Box>


            </Box>
        </Box >
    )
}

export default Home