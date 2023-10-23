import React, { useContext, useState } from 'react';
import { Avatar, Box,Button,Input, Divider, Slider, Text } from 'native-base';
import { SafeAreaView } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { usePersistState } from "../hooks/usePersistState";


interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
}) => {
   const { goal, user, setGoal, setUser } = useContext(UserContext);

  return (
    <SafeAreaView>

       <Avatar bg="purple.500" mt={20} alignSelf="center" size="2xl" source={{
        uri: user?.photo || undefined,
      }}>
        {user?.name.substring(0, 1)}
      </Avatar>

      <Text fontSize="2xl" textAlign="center" mt={4}>
         {user?.name}
      </Text>

      <Input
        defaultValue={user?.name}
        onChangeText={(value) => {
          setUser({
            name: value,
            photo: String(user?.photo),
          });
        }}
        placeholder="Default Input"
      />


      <Divider my={10} />

      <Box mx={20}>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Goal de água
        </Text>
        <Text fontSize="xl" textAlign="center" mt={4}>
          {goal}ml
        </Text>


        <Slider
          defaultValue={goal}
          value={goal}
          minValue={0}
          maxValue={4000}
          onChange={(value) => setGoal(value)}
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