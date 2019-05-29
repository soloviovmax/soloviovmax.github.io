import React, { Component } from 'react';
import Twitter from 'twitter';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import TwitterCard from './components/TwitterCard.jsx'
import Header from './components/Header';
import Search from './components/Search';

const client = Twitter({
  consumer_key: 'fhY0Mol7KAsriNEVWGZmJedOt',
  consumer_secret: 'x7WejeWgvr4mvnikt01G0fqhNFDxr1l9MH92OyDWsrnzfWfsOt',
  access_token_key: '127255295-6z1MBVxm5sRmYPUvVSLul1NIwWEp2zXAENWSjO15',
  access_token_secret: 'tKSYpFOdoQ75r3587U9ZBwoFr1H3Nl1BK4WzRDc5mTfHX'
});

const url = 'http://localhost:8080/cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
    this.remove = this.remove.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { getCardsList } = this.props;
    const { savedPanelIsVisible, sortType } = nextProps;
    if (savedPanelIsVisible) {
      getCardsList(sortType);
    }
  }
  save(card) {
    const { user, text, created_at, entities, id_str } = card;
    const { name, screen_name, profile_image_url } = user;
    const newCard = {
      user: {
        name,
        screen_name,
        profile_image_url,
      },
      entities: {
        media: entities.media,
      },
      text,
      created_at,
      id_str,
      savedDate: Date.now(),
    }
    axios.post(url, newCard);
  }
  remove(id) {
    const { sortType } = this.props;
    axios.delete(`${url}/${id}`);
    this.getCardsList(sortType);
  }

  render() {
    const { savedPanelIsVisible, savedCards, fetchedTweets } = this.props;
    const tweetsList = savedPanelIsVisible ? savedCards : fetchedTweets;

    return (<div className="App">
      <Header {...this.props} />
      <div className="body">
        <h1 className="body-title">{savedPanelIsVisible ? 'Saved' : 'Search'}</h1>
        {
          !savedPanelIsVisible && <Search {...this.props} />
        }
      </div>
      <div>
        {
          tweetsList && !!tweetsList.length && tweetsList.map(tweet => (
            <TwitterCard
              card={tweet}
              save={this.save}
              remove={this.remove}
              isSaved={tweet.savedDate}
              key={tweet._id || tweet.id}
            />
          ))
        }
      </div>
    </div>);
  }
}
export default connect(
  state => ({
    sortType: state.sortType,
    savedPanelIsVisible: state.savedPanelIsVisible,
    inputSearchValue: state.inputSearchValue,
    savedCards: state.savedCards,
    fetchedTweets: state.fetchedTweets,
  }),
  dispatch => ({
    sortTypeOnChange: (sortType) => {
      dispatch({ type: 'sortTypeOnChange', payload: sortType })
    },
    savedPanelToggle: () => {
      dispatch({ type: 'savedPanelToggle' })
    },
    searchInputOnChange: (value) => {
      dispatch({ type: 'searchInputOnChange', payload: value })
    },
    getCardsList: (sortType) => {
      axios.get(`http://localhost:8080/cards/${sortType}`)
      .then(({ data }) => {
        dispatch({ type: 'getCardsList', payload: data })
      });
    },
    fetchTweets(e, inputSearchValue) {
      e.preventDefault();
      client.get('search/tweets', {q: inputSearchValue}, function(error, data, response) {
        dispatch({ type: 'fetchTweets', payload: data.statuses })
      });
    }
  }),
)(App);
