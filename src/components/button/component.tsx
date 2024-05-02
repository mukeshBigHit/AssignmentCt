import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../utils/colors';

interface IButtonComponentProps {
  text: string;
  onPress: () => void;
}

const ButtonComponent = ({ text, onPress }: IButtonComponentProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical : 12,
    paddingHorizontal : 12,
    borderWidth : 1,
    borderColor : colors.primary,
    marginHorizontal : 4,
    marginVertical : 4,
    backgroundColor : colors.white,
    borderRadius : 4
  },
  text: {
    fontSize: 14,
    color: colors.primary,
  },
});

export default ButtonComponent;
