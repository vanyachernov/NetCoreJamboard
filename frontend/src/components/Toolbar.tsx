import {useState} from "react";
import {Box, IconButton, HStack, Flex} from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiRectangleFill } from "react-icons/ri";
import toolState from "../store/toolState.ts";
import canvasState from "../store/canvasState.ts";
import Brush from "../tools/Brush.ts";
import Rect from "../tools/Rect.ts";

const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<string>("");
    
    const handleSelectBrush = () => {
        setSelectedTool("pencil");
        toolState.setTool(new Brush(canvasState.canvas));
    }

    const handleSelectRect = () => {
        setSelectedTool("rectangle");
        toolState.setTool(new Rect(canvasState.canvas));
    }
    
    return (
        <Box
            className="shadow-lg"
            bg="white.50"
            p={4}
        >
            <Box className="w-100">
                <Flex gap={3}>
                    <HStack spacing={4} justify="left">
                        <IconButton
                            icon={<FaPencilAlt />}
                            bg='green.600'
                            color='white'
                            aria-label="Pencil"
                            _hover={selectedTool !== 'pencil' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                            onClick={handleSelectBrush}
                            isActive={selectedTool === 'pencil'}
                        />
                    </HStack>

                    <HStack spacing={4} justify="left">
                        <IconButton
                            icon={<RiRectangleFill />}
                            bg='green.600'
                            color='white'
                            aria-label="Rectangle"
                            _hover={selectedTool !== 'rectangle' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                            onClick={handleSelectRect}
                            isActive={selectedTool === 'rectangle'}
                        />
                    </HStack>
                </Flex>
            </Box>
            
        </Box>
    );
};

export default Toolbar;
