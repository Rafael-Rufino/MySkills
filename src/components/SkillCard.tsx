import React from 'react';

import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text 
        style={styles.textskill}
        {...rest}
      >
      {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textskill: {
    color: 'yellow',

    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1e25',
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
    borderRadius: 50,
  },
});
