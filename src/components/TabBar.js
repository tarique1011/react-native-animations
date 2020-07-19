import React from 'react';
import {
  View,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width - 80;

const colors = [
  {bold: '#6649C2', light: '#E1DBF4'},
  {bold: '#DF55A9', light: '#F8DDEF'},
  {bold: '#F1AE18', light: '#FCEFD7'},
  {bold: '#0092B4', light: '#D1E9EF'},
];

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Tabs
            key={label}
            {...{index, state, isFocused, options, onPress, label}} 
          />
        );
      })}
    </View>
  );
};

const Tabs = ({label, isFocused, options, onPress, state, index}) => {
  const width = useSharedValue(SCREEN_WIDTH * 0.2);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  if (isFocused) {
    width.value = withTiming(SCREEN_WIDTH * 0.4);
    opacity.value = withTiming(1);
    scale.value = withTiming(1);
  } else {
    width.value = withTiming(SCREEN_WIDTH * 0.2);
    opacity.value = withTiming(1);
    scale.value = withTiming(0);
  }

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  const labelAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
    };
  });

  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.tabs,
          {backgroundColor: isFocused ? colors[index].light : 'transparent'},
          containerAnimatedStyle,
        ]}>
        <Icon
          color={isFocused ? colors[index].bold : 'black'}
          style={styles.icon}
          name={options.tabBarIcon}
          size={20}
        />
        <Animated.Text
          style={[
            styles.label,
            labelAnimatedStyle,
            {
              transform: [{scale: scale.value}],
              color: isFocused ? colors[index].bold : 'black',
            },
          ]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    paddingHorizontal: 20,
    shadowOffset: {
      height: -1,
      width: 0,
    },
    shadowColor: '#A3A3A3',
    shadowOpacity: 1,
    backgroundColor: 'white',
    shadowRadius: 5,
  },
  tabs: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
});

export {TabBar};
