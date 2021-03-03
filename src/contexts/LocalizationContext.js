import createContext from './createContext';
import {storage} from '@@/utils/Storage';
import i18n from '@@/i18n';
const LocalizationContext = (state, action) => {
  switch (action.type) {
    case 'language':
      storage.save({
        key: 'language',
        data: {
          locale: action.locale,
        },
        expires: null
      });
      i18n.locale = action.locale;
      return {
        i18n: i18n,
      };
    default:
      return state;
  }
};

export const {Context, Provider} = createContext(LocalizationContext, {
  i18n: i18n,
});
