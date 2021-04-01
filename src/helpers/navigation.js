import { CommonActions, StackActions } from '@react-navigation/native';

export const resetStackAndNavigate = (navigation, path, routeName) => {
  // navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: path, params: {initialRouteName: !routeName? '': routeName}, }] }));
  navigation.dispatch(CommonActions.reset({ index: 0, routes: [
    { 
      name: path, params: {initialRouteName: !routeName? '': routeName}, 
    }
  ] }));

};

export const popStackWithCount = (navigation, count) => {
  const popAction = StackActions.pop(count);
  navigation.dispatch(popAction);
};