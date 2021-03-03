import createContext from './createContext';
import {storage} from '@@/utils/Storage';

const WelcomeContext = (state, action) => {
  switch (action.type) {
    case 'welcome':
      storage.save({
        key: 'welcomeState',
        data: {
          welcomeState: true,
        },
        expires: 1000 * 60 * 10,
      });
      return {
        welcomeState: true,
      };

    default:
      return state;
  }
};

const onReloadNeeded = (async () => {  
  let profileData = {}
  try {
     profileData = await storage.load({key: 'welcomeState'});
    
    
  } catch (err) {}
  return profileData
})();

export const {Context, Provider} = createContext(WelcomeContext, {
  welcomeState: false,
},onReloadNeeded);
