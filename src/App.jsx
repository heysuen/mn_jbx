import React from 'react';
import './App.css';
import { Heading, Text, Box, Image, Center } from '@chakra-ui/react';
import jukebox from './assets/jukebox.gif';

// SONG
import track1 from './assets/heyma.mp3'
import track2 from './assets/filaac.mp3'


function App() {
  return (
    <div className="main">
      <Heading as='h1' className="text-space">HELLO</Heading>
      <Text fontSize='lg' className="text-space">Welcome to the midnight jukebox!
      </Text>
      <Center>
        <Image src={jukebox} boxSize='250px' >
        </Image>
      </Center>
      <Center>
        <audio src={track2} controls/>
      </Center>
      
      
    </div>    
  );
}

export default App;