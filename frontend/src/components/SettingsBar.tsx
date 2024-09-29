import { Input, FormControl, FormLabel, Flex, Box } from '@chakra-ui/react';
import toolState from "../store/toolState.ts";

const SettingsBar = () => {
    return (
        <Box p="4" bg="gray.100" roundedBottom="md" shadow="md">
            <Box w="fit-content">
                <FormControl>
                    <Flex flexDirection="column" gap={3}>
                        <Flex alignItems="center" justifyContent="space-between">
                            <FormLabel htmlFor="line-width" mb="0" mr="2">
                                Толщина линии:
                            </FormLabel>
                            <Input
                                id="line-width"
                                type="number"
                                defaultValue={1}
                                onChange={(e) => 
                                    toolState.setLineWidth(parseInt(e.target.value))}
                                placeholder="Введите толщину линии"
                                w="100px"
                            />
                        </Flex>
                        <Flex alignItems="center" justifyContent="space-between">
                            <FormLabel htmlFor="stroke-color" mb="0" mr="2">
                                Цвет обводки:
                            </FormLabel>
                            <Input
                                id="stroke-color"
                                type="color"
                                defaultValue={1}
                                onChange={(e) => 
                                    toolState.setStrokeColor(e.target.value)}
                                w="100px"
                            />
                        </Flex>
                    </Flex>
                </FormControl>
            </Box>
        </Box>
    );
};

export default SettingsBar;
