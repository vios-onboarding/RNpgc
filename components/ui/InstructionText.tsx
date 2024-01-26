import { FC, PropsWithChildren } from 'react'
import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const InstructionText: FC<PropsWithChildren & { style?: any } > = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
