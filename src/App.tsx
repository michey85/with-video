import { useState } from 'react';
import { Heading, Container } from '@chakra-ui/react';

import { Spoiler } from './Spoiler';
import { VideoInTabs } from './VideoInTabs';
// import { VideoList } from './VideoList';

const videos: string[] = [
  'https://www.youtube.com/embed/eUAd5f936Yg',
  'https://www.youtube.com/embed/jfKfPfyJRdk',
  'https://www.youtube.com/embed/iicfmXFALM8',
];

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container maxW="container.lg" pt={4} minH="100dvh">
      <Heading as="h1" size="2xl" textAlign="center" mb={4}>
        React Video
      </Heading>

      <Spoiler title="Videos" isOpen={isOpen} onChange={() => setOpen(!isOpen)}>
        <VideoInTabs videos={videos} isOpen={isOpen} />
        {/* {isOpen ? <VideoList videos={videos} /> : <div />} */}
      </Spoiler>
    </Container>
  );
}

export default App;
