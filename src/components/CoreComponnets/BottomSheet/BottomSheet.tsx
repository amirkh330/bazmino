import {
    Box,
    Button,
    Slide,
    useDisclosure
} from '@chakra-ui/react';
import React from 'react';


const BottomSheet: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box textAlign="center" p="6">
        <Button colorScheme="blue" onClick={onOpen}>
          Open Bottom Sheet
        </Button>

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            position="fixed"
            bottom="0"
            left="0"
            width="100%"
            maxWidth="400px"
            mx="auto"
            bg="white"
            p="6"
            boxShadow="md"
            borderTopRadius="md"
          >
            <Box
              height="5px"
              width="40px"
              bg="gray.300"
              borderRadius="full"
              mx="auto"
              mb="4"
            />
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={onClose}
              mb="4"
            >
              Close
            </Button>
            <Box>
              Add your bottom sheet content here. This could include forms,
              actions, or additional navigation options.
            </Box>
          </Box>
        </Slide>
      </Box>
  );
};

export default BottomSheet;
