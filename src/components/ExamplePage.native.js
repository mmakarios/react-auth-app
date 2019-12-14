import React from 'react';
import {
  Text,
} from 'react-native';
import styles from '../styles/examplePage.js';

class ExamplePage extends React.Component {
  render() {
    return (
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this
        screen and then come back to see your edits.
      </Text>
    );
  }
}

export default ExamplePage;
