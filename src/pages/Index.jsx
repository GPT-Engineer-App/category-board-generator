import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const categories = [
  { name: "Technology", image: "/images/technology.jpg" },
  { name: "Nature", image: "/images/nature.jpg" },
  { name: "Food", image: "/images/food.jpg" },
  { name: "Fashion", image: "/images/fashion.jpg" },
  { name: "Art", image: "/images/art.jpg" }
];

const Index = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Explore Categories</Text>
      <SimpleGrid columns={3} spacing={10}>
        {categories.map(category => (
          <Box key={category.name} boxShadow="md" rounded="lg" overflow="hidden">
            <Image src={category.image} alt={category.name} />
            <Text p={2} fontSize="xl" fontWeight="semibold" textAlign="center">{category.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;