import { Box, IconButton, HStack } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import toolState from "../store/toolState.ts";
import Brush from "../tools/Brush.ts";
import canvasState from "../store/canvasState.ts";
import {useState} from "react";

const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<string>("");
    
    const handleSelectTool = (tool: string) => {
        setSelectedTool(tool);
        toolState.setTool(new Brush(canvasState.canvas));
    }
    
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
                    _hover={selectedTool !== 'pencil' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                    onClick={() => handleSelectTool("pencil")}
                    isActive={selectedTool === 'pencil'}
                />
            </HStack>
        </Box>
    );
};

export default Toolbar;
