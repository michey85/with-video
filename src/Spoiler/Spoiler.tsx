import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

type SpoilerProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onChange: () => void;
};

const Spoiler = ({ isOpen, title, children, onChange }: SpoilerProps) => {
  return (
    <Accordion allowToggle index={isOpen ? [0] : []} onChange={onChange}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export { Spoiler };
