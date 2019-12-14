import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/homePage.js';

import { Container, Content, Button } from 'native-base';

class HomePage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>x One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
          <View>
            <Container>
              <Content>
                <Button primary onPress={() =>
                {
                  const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0;
                  const params = { screenNumber: screenNumber + 1 };
                  params.fromBottom = true; 
                  navigation.navigate('Example', params);
                }
                }>
                  <Text> Primary </Text>
                </Button>
              </Content>
            </Container>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    );
  }
}

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;
