import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Story from './components/Story';
import Feed from './components/Feed';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Story />
        <Feed />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
