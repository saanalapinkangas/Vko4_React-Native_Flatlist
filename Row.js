import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Row({person}) {
    return (
        <Text style={styles.row}>{person.lastname}, {person.firstname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingLeft: 60,
      fontSize: 25,
    },
  });