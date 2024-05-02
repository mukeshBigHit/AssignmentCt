import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../utils/colors';

interface IButtonComponentProps {
  text: string;
  style?: any;
  onPress: () => void;
  disabled?: boolean;
}

const ButtonComponent = ({
  text,
  disabled,
  onPress,
  style,
}: IButtonComponentProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style, disabled && styles.disabled]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default ButtonComponent;
