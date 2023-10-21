import { Avatar, Box, Divider, Slider, Text } from 'native-base';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';

interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
}) => {
  const [meta, setMeta] = useState<number>(2000)

  return (
    <SafeAreaView>
      <Avatar bg="purple.500" mt="20" alignSelf="center" size="2xl" source={{
        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}>
        xx
      </Avatar>
      <Text fontSize="2xl" textAlign="center" mt={4}>
        Evandro
      </Text>

      <Divider my={10} />

      <Box mx={20}>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Goal de água
        </Text>
        <Text fontSize="xl" textAlign="center" mt={4}>
          {meta }ml
        </Text>
        <Slider
          defaultValue={meta}
          value={meta}
          minValue={0}
          maxValue={4000}
          onChange={(value) => setMeta(value)}
          step={100}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </SafeAreaView>
  );
};