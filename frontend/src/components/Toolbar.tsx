import {useState} from "react";
import {Box, IconButton, HStack, Flex, Tooltip, Input} from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiRectangleFill } from "react-icons/ri";
import { IoTriangle } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import toolState from "../store/toolState.ts";
import canvasState from "../store/canvasState.ts";
import Brush from "../tools/Brush.ts";
import Rect from "../tools/Rect.ts";
import Triangle from "../tools/Triangle.ts";
import Circle from "../tools/Circle.ts";

const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<string>("pencil");
    
    const handleSelectBrush = () => {
        setSelectedTool("pencil");
        toolState.setTool(new Brush(canvasState.canvas));
    }

    const handleSelectRect = () => {
        setSelectedTool("rectangle");
        toolState.setTool(new Rect(canvasState.canvas));
    }
    
    const handleSelectTriangle = () => {
        setSelectedTool("triangle");
        toolState.setTool(new Triangle(canvasState.canvas));
    }

    const handleSelectCircle = () => {
        setSelectedTool("circle");
        toolState.setTool(new Circle(canvasState.canvas));
    }
    
    const handleChangeColor = (e) => {
        toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    }
    
    return (
        <Box
            className="shadow-lg"
            bg="white.50"
            p={4}
        >
            <Box className="w-100">
                <Flex gap={3}>
                    <Tooltip label="Кисть">
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
                    </Tooltip>

                    <Tooltip label="Прямоугольник">
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
                    </Tooltip>

                    <Tooltip label="Треугольник">
                        <HStack spacing={4} justify="left">
                            <IconButton
                                icon={<IoTriangle />}
                                bg='green.600'
                                color='white'
                                aria-label="Triangle"
                                _hover={selectedTool !== 'triangle' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                                onClick={handleSelectTriangle}
                                isActive={selectedTool === 'triangle'}
                            />
                        </HStack>
                    </Tooltip>

                    <Tooltip label="Окружность">
                        <HStack spacing={4} justify="left">
                            <IconButton
                                icon={<FaCircle />}
                                bg='green.600'
                                color='white'
                                aria-label="Circle"
                                _hover={selectedTool !== 'circle' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                                onClick={handleSelectCircle}
                                isActive={selectedTool === 'circle'}
                            />
                        </HStack>
                    </Tooltip>
                    
                    <Tooltip label="Задать цвет">
                        <HStack width={100} spacing={4} justify="left">
                            <Input
                                aria-label="Color"
                                type="color"
                                onChange={(e) => handleChangeColor(e)} />
                        </HStack>
                    </Tooltip>
                </Flex>
            </Box>
        </Box>
    );
};

export default Toolbar;
