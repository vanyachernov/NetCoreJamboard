import {useState} from "react";
import {Box, IconButton, HStack, Flex, Tooltip, Input, Divider} from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiRectangleFill } from "react-icons/ri";
import { IoTriangle } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa";
import toolState from "../store/toolState.ts";
import canvasState from "../store/canvasState.ts";
import Brush from "../tools/Brush.ts";
import Rect from "../tools/Rect.ts";
import Triangle from "../tools/Triangle.ts";
import Circle from "../tools/Circle.ts";
import Eraser from "../tools/Eraser.ts";

const Toolbar = () => {
    const [selectedTool, setSelectedTool] = useState<string>("pencil");

    const handleSelectBrush = () => {
        const canvas = canvasState.canvas;
        if (canvas) {
            setSelectedTool("pencil");
            toolState.setTool(new Brush(canvas));
        }
    }

    const handleSelectRect = () => {
        const canvas = canvasState.canvas;
        if (canvas) {
            setSelectedTool("rectangle");
            toolState.setTool(new Rect(canvas));
        }
    }

    const handleSelectTriangle = () => {
        const canvas = canvasState.canvas;
        if (canvas) {
            setSelectedTool("triangle");
            toolState.setTool(new Triangle(canvas));
        }
    }

    const handleSelectCircle = () => {
        const canvas = canvasState.canvas;
        if (canvas) {
            setSelectedTool("circle");
            toolState.setTool(new Circle(canvas));
        }
    }

    const handleSelectEraser = () => {
        const canvas = canvasState.canvas;
        if (canvas) {
            setSelectedTool("eraser");
            toolState.setTool(new Eraser(canvas));
        }
    }


    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <Tooltip label="Резинка">
                        <HStack spacing={4} justify="left">
                            <IconButton
                                icon={<FaEraser />}
                                bg='green.600'
                                color='white'
                                aria-label="Eraser"
                                _hover={selectedTool !== 'eraser' ? { bg: 'green.500' } : { bg: 'gray.300' }}
                                onClick={handleSelectEraser}
                                isActive={selectedTool === 'eraser'}
                            />
                        </HStack>
                    </Tooltip>

                    <Divider orientation="vertical" bg="gray" height="40px" px={0.2} />
                    
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
