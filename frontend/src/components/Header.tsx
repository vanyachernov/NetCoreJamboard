import {Box,Flex,Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box bg="green.600" p={4} color="white">
            <Flex align="center" justify="space-between">
                <Text fontSize="xl" color="white" fontWeight="bold">Jamboard</Text>
            </Flex>
        </Box>
    );
};

export default Header;