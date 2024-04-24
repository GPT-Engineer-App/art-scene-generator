import React from "react";
import { Box, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

const ScenePromptComponent = ({ direction_photography, image_generation_prompt, scene }) => {
  return (
    <VStack align="start" p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Text fontWeight="bold">Direction of Photography:</Text>
      <Text>{direction_photography}</Text>
      <Text fontWeight="bold">Scene Description:</Text>
      <Text>{scene}</Text>
      <Image src={`https://placehold.co/600x400`} alt="Scene Image" />
    </VStack>
  );
};

const SceneComponent = ({ description, duration, name, timeslot }) => {
  return (
    <VStack align="start" p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Text fontWeight="bold">Name:</Text>
      <Text>{name}</Text>
      <Text fontWeight="bold">Description:</Text>
      <Text>{description}</Text>
      <Text fontWeight="bold">Duration:</Text>
      <Text>{duration}</Text>
      <Text fontWeight="bold">Timeslot:</Text>
      <Text>{timeslot}</Text>
    </VStack>
  );
};

const Index = () => {
  const project = {
    name: "Epic Journey",
    song: "The Great Adventure",
    video_idea: "A journey through fantastical landscapes",
    scene_prompts: [
      {
        direction_photography: "Wide angles with deep focus",
        image_generation_prompt: "fantastical landscape",
        scene: "A vast open field under a twilight sky",
      },
      {
        direction_photography: "Close-ups with blurred backgrounds",
        image_generation_prompt: "mysterious forest path",
        scene: "A narrow path winding through a dense forest",
      },
    ],
    scenes: [
      {
        name: "Opening Scene",
        description: "Introduction to the mystical world",
        duration: "2 minutes",
        timeslot: "00:00 - 02:00",
      },
      {
        name: "Climax Scene",
        description: "The hero confronts the shadow dragon",
        duration: "3 minutes",
        timeslot: "15:00 - 18:00",
      },
    ],
    style: {
      art_direction: "Surreal and vibrant",
      art_style: "Digital painting",
      general_mood: "Epic and adventurous",
      motifs: "Dragons, castles, enchanted forests",
    },
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Heading>{project.name}</Heading>
        <Text>
          <strong>Song:</strong> {project.song}
        </Text>
        <Text>
          <strong>Video Idea:</strong> {project.video_idea}
        </Text>

        <Heading size="md">Scene Prompts</Heading>
        <HStack spacing={8} overflowX="auto">
          {project.scene_prompts.map((prompt, index) => (
            <ScenePromptComponent key={index} {...prompt} />
          ))}
        </HStack>

        <Heading size="md">Scenes</Heading>
        <HStack spacing={8} overflowX="auto">
          {project.scenes.map((scene, index) => (
            <SceneComponent key={index} {...scene} />
          ))}
        </HStack>

        <Heading size="md">Style Information</Heading>
        <HStack spacing={10}>
          <VStack align="start">
            <Text>
              <strong>Art Direction:</strong> {project.style.art_direction}
            </Text>
            <Text>
              <strong>Art Style:</strong> {project.style.art_style}
            </Text>
            <Text>
              <strong>General Mood:</strong> {project.style.general_mood}
            </Text>
            <Text>
              <strong>Motifs:</strong> {project.style.motifs}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
