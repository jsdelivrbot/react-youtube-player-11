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

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, data => {
            this.setState({ 
                videos: data,
                selectedVideo: data[0] 
            });
        });
    }

    render() {
        return (
            <div>
                <SearcBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={ selected => { this.setState({selectedVideo: selected})}}
                    videos={ this.state.videos } /> 

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));