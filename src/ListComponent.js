import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';

const items = [{name: 'TabBar', label: 'Animating Tab Bar'}];

const ListComponent = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(item.name)}>
              <View style={styles.listContainer}>
                <Text style={styles.listLabel}>{item.label}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  listLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
});

export default ListComponent;
