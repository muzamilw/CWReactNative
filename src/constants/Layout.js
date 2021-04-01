import { Dimensions, I18nManager } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isRTL = I18nManager.isRTL;

export default {
  window: {
    width,
    height,
    isRTL
  },
  isSmallDevice: width < 375,
};
