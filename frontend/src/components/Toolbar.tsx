import { Box, IconButton, HStack } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';

const Toolbar = () => {
    return (
        <Box
            className="shadow-lg"
            bg="white.50"
            p={4}
        >
            <HStack spacing={4} justify="left">
                <IconButton
                    icon={<FaPencilAlt />}
                    bg='green.600'
                    color='white'
                    aria-label="Pencil"
                    _hover={{ bg: 'green.500' }}
                />
            </HStack>
        </Box>
    );
};

export default Toolbar;
