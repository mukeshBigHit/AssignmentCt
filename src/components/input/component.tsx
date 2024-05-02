import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../utils/colors';

interface InputComponentProps {
  multiline?: boolean;
  onChange: (e:string) => any;
  value: string;
  placeholder: string;
}

const InputComponent = ({
  multiline,
  onChange,
  value,
  placeholder,
}: InputComponentProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        onChangeText={onChange}
        value={value}
        placeholderTextColor={colors.primary}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    fontSize: 14,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
});

export default InputComponent;
