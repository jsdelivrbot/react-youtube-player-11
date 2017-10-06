import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearcBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBEoJMJHY_EvNt3l09kM4bKIlq-TR4WuL8';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key:API_KEY, term: 'surfboards'}, data => {
            this.setState({ videos: data });
        });
    }

    render() {
        return (
            <div>
                <SearcBar />
                <VideoDetail video={ this.state.videos[0] } />
                <VideoList videos={ this.state.videos } /> 

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));