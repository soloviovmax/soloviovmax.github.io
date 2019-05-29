import { playList, initialState } from './store.js';

describe('reducer tests', () => {
  it('sortTypeOnChange if disabled', () => {
    const action = {
      type: 'sortTypeOnChange',
      payload: 'Saved date'
    }
    expect(playList(initialState, action)).toEqual({
      ...initialState,
    })
  });

  it('sortTypeOnChange incorrect parameter', () => {
    const previousState = {
      ...initialState,
      sortType: 'Saved date',
    }
    const action = {
      type: 'sortTypeOnChange',
      payload: 'incorrect parameter',
    }
    expect(playList(previousState, action)).toEqual({
      ...previousState,
    })
  });

  it('sortTypeOnChange', () => {
    const previousState = {
      ...initialState,
      savedPanelIsVisible: true,
    }
    const action = {
      type: 'sortTypeOnChange',
      payload: 'Saved date',
    }
    expect(playList(previousState, action)).toEqual({
      ...previousState,
      sortType: action.payload,
    })
  });

  it('savedPanelToggle', () => {
    const action = {
      type: 'savedPanelToggle'
    }
    expect(playList(initialState, action)).toEqual({
      ...initialState,
      savedPanelIsVisible: !initialState.savedPanelIsVisible,
    })
  });

  it('searchInputOnChange', () => {
    const action = {
      type: 'searchInputOnChange',
      payload: 'design'
    }
    expect(playList(initialState, action)).toEqual({
      ...initialState,
      inputSearchValue: action.payload,
    })
  });

  it('searchInputClean', () => {
    const previousState = {
      ...initialState,
      payload: 'design'
    }
     const action = {
      type: 'searchInputOnChange',
      payload: '',
    }
    expect(playList(previousState, action)).toEqual({
      ...previousState,
      inputSearchValue: '',
    })
  });
  it('getCardsList', () => {
     const action = {
      type: 'getCardsList',
      payload: [1, 2, 3],
    }
    expect(playList(initialState, action)).toEqual({
      ...initialState,
      savedCards: action.payload,
    })
  });
  it('fetchTweets', () => {
    const previousState = {
      ...initialState,
      inputSearchValue: 'Some value',
    }
     const action = {
      type: 'fetchTweets',
      payload: [1, 2, 3],
    }
    expect(playList(previousState, action)).toEqual({
      ...previousState,
      inputSearchValue: '',
      fetchedTweets: action.payload,
    })
  });
})