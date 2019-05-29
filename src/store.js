import { createStore } from 'redux';
import { sortTypesList } from './settings'

export const initialState = {
   sortType: sortTypesList[0],
   savedPanelIsVisible: false,
   inputSearchValue: '',
   savedCards: [],
   fetchedTweets: [],
}

export function playList(state = initialState, action) {
   switch (action.type) {
      case 'sortTypeOnChange':
         if (!sortTypesList.includes(action.payload)
            || !state.savedPanelIsVisible) return state;
         return {
            ...state,
            sortType: action.payload,
         };
      case 'savedPanelToggle':
         return {
            ...state,
            savedPanelIsVisible: !state.savedPanelIsVisible,
         }
      case 'searchInputOnChange':
         return {
            ...state,
            inputSearchValue: action.payload,
         }
      case 'getCardsList':
         return {
            ...state,
            savedCards: action.payload,
         }
      case 'fetchTweets':
         return {
            ...state,
            fetchedTweets: action.payload,
            inputSearchValue: '',
         }
      default: return state;
   }
}

export default createStore(playList);