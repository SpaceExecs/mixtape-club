import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "./components/Container.jsx";
import LoginBox from './components/Login.jsx';
import Navigation from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import Hero from './components/Hero.jsx';
import SearchList from './components/SearchList.jsx';
import PlaylistBuilderList from './components/PlaylistBuilderList.jsx';
import PlaylistImageSelector from './components/PlaylistImageSelector.jsx';
import { cpus } from "os";

import LisaFrankenstein from './assets/img/tapes/lisa-frankenstein-tape.gif';
import GreenTape from './assets/img/tapes/green-tape.gif';
import OrangeTape from './assets/img/tapes/orange-tape.gif';
import BlueTape from './assets/img/tapes/blue-tape.gif';
import RedTape from './assets/img/tapes/red-tape.gif';
import PinkTape from './assets/img/tapes/pink-tape.gif';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [{ snippet: { title: '' }, id: { videoId: '4D2qcbu26gs' }}],
            player: null,
            tapeImages: [{ image: LisaFrankenstein, name: 'Lisa Frankenstein' }, { image: GreenTape, name: 'green' }, { image: OrangeTape, name: 'orange' }, { image: BlueTape, name: 'blue' }, { image: RedTape, name: 'red' }, { image: PinkTape, name: 'pink' }],
            builderImage: { image: BlueTape, name: 'blue' },
            tapeLabel: 'Untitled',
            playing: false,
            query: '',
            selectedResult: { snippet: { title: 'Search for a song' }, id: { videoId: '4D2qcbu26gs' } },
            sideA: [],
            sideB: [],
            displayImageSelector: true,
            isAuthenticated: false,
            onDeckSideA: ['Track 1 A', 'Track 2 A', 'Track 3 A', 'Track 4 A', 'Track 5 A'],
            onDeckSideB: ['Track 1 B', 'Track 2 B', 'Track 3 B', 'Track 4 B', 'Track 5 B'],
            googleId: 'FILL_ME_IN',
            tapeBackgroundColor: '#fff',
            queryParam: "",
        }

        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
        this.onReady = this.onReady.bind(this);
    
        this.onSelectTapeImage = this.onSelectTapeImage.bind(this);
        this.onTapeLabelChange = this.onTapeLabelChange.bind(this);
        this.onResultClick = this.onResultClick.bind(this);
        this.onPassSongToSideA = this.onPassSongToSideA.bind(this);
        this.onPassSongToSideB = this.onPassSongToSideB.bind(this);
        this.onSaveTapeImage = this.onSaveTapeImage.bind(this);
        this.onSavePlaylist = this.onSavePlaylist.bind(this);
        this.onDeleteSong = this.onDeleteSong.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.logout = this.logout.bind(this);
    }

    authenticateUser(){
        axios.get('/user/')
        .then((response)=> {
           console.log(response.data);
            if(response.data.verified){
                this.setState({
                    isAuthenticated: true,
                    googleId: response.data.id
                })
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    componentDidMount(){
        this.authenticateUser();
        const {googleId} = this.state;
        
        axios.get('/getUser', {
            googleId
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error('Error searching:', err)
        })
    }


    onChange(event){
        this.setState({
            query: event.target.value,
        })
    }

    onPlayVideo() {
        this.state.player.playVideo();
        this.setState({
            playing: true,
        })
    }

    onPauseVideo() {
        this.state.player.pauseVideo();
        this.setState({
            playing: false,
        })
    }

    onReady(event) {
        this.setState({
            player: event.target,
        });
    }

    logout (){
        
        axios.get('/logout');
        this.setState({
            isAuthenticated: false,
        })
    }
  

    
    onSearch(){
        let query = this.state.query;
        axios.post('/search', {query})
        .then((response)=>{
            console.log(response);
            this.setState({
                searchResults : response.data.items,
                selectedResult : response.data.items[0],
            })
        })
        .catch((err)=> {
            console.error('Error searching:', err)
        })
    }

    onSelectTapeImage(event, tape) {
        const { tapeBackgroundColor } = this.state;
     
        this.setState({
            builderImage: tape,
        })
    }

    onTapeLabelChange(event) {
        this.setState({
            tapeLabel: event.target.value,
        })
    }

    onResultClick(selected) {
        console.log('List item clicked');
        this.setState({
            playing: true,
            selectedResult: selected,
        })
        setTimeout(()=>{
            this.state.player.playVideo();
        },0);
    }

    onPassSongToSideA(song) {
        const { sideA } = this.state;
        if (sideA.length < 5) {
            this.setState(prevState => {
                return {sideA: prevState.sideA.concat(song)}
            })
        } else {
            alert('Side A is full, try adding songs to side B or remove songs to make more space.');
        }
    }

    onPassSongToSideB(song) {
        const { sideB } = this.state;
        if (sideB.length < 5) {
            this.setState(prevState => {
                return { sideB: prevState.sideB.concat(song) }
            })
        } else {
            alert('Side B is full, try adding songs to side A or remove songs to make more space.');
        }
    }

    onSaveTapeImage() {
        const { displayImageSelector } = this.state;
        this.setState({
            displayImageSelector: !displayImageSelector,
        })
    }

    onSavePlaylist() {
        const {googleId, sideA, sideB, builderImage, tapeLabel} = this.state;
        const {image, name} = builderImage
        axios.post('/store', {
                userId: googleId,
                aSideLinks: sideA,
                bSideLinks: sideB,
                tapeDeck: image,
                tapeLabel
        })
            .then((response) =>{
                // handle success
                // console.warn(response.config.data);
                let newId = JSON.parse(response.config.data);
                // const {userId} = response.config.data;
                let key = JSON.stringify(newId.aSideLinks);
               
                axios.post('/getlink', {
                    key
                })
                .then((response) => {
                    //
                    console.log(response.data, 'get call')
                    
                    this.setState({
                        queryParam: response.data.id
                    })
                
                    axios.get(`/mixtape-player?id=${response.data.id}`)
                    .then(()=> {
                        console.log('tape saved');
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) =>{
                // handle error
                console.log(error);
            })
    }

    onDeleteSong(event) {
        const index = event.currentTarget.id[1];
        const side = event.currentTarget.id[0];
        
        if (side === 'A') {
            this.state.sideA.splice(index, 1);
            const newSideA = this.state.sideA;
            this.setState({
                sideA: newSideA,
            })
        } else if (side === 'B') {
            this.state.sideB.splice(index, 1);
            const newSideB = this.state.sideB;
            this.setState({
                sideB: newSideB,
            })
        }

    }


    render() {
        const { isAuthenticated, searchResults, playing, selectedResult, tapeImages, builderImage, tapeLabel, sideA, sideB, displayImageSelector, onDeckSideA, onDeckSideB, tapeBackgroundColor, queryParam, googleId, userName } = this.state;
        return (
            <Router>
                <div className="App">
                    <Navigation logout={this.logout} isAuthenticated={isAuthenticated} userName={userName} />
                    <Container authenticateUser={this.authenticateUser} isAuthenticated={isAuthenticated} onReady={this.onReady} onPauseVideo={this.onPauseVideo} onPlayVideo={this.onPlayVideo} onChange={this.onChange} onSearch={this.onSearch} onResultClick={this.onResultClick} playing={playing} searchResults={searchResults} tapeImages={tapeImages} builderImage={builderImage} selectImage={this.onSelectTapeImage} tapeLabel={tapeLabel} onLabelChange={this.onTapeLabelChange} selectedResult={selectedResult} onPassToSideA={this.onPassSongToSideA} sideA={sideA} onPassToSideB={this.onPassSongToSideB} sideB={sideB} displayImageSelector={displayImageSelector} onSaveImage={this.onSaveTapeImage} onDeckSideA={onDeckSideA} onDeckSideB={onDeckSideB} onSavePlaylist={this.onSavePlaylist} tapeBackgroundColor={tapeBackgroundColor} onDelete={this.onDeleteSong} queryParam={queryParam} googleId={googleId}/>

                </div>
            </Router>
        );
    }
}

// <div className="App">
//     <Navigation />
//     <Hero />
//     <Search onChange={this.onChange} onSearch={this.onSearch} />
//     <LoginBox />
//     <SearchList searchResults={searchResults} />
//     <PlaylistImageSelector />
//     <PlaylistBuilderList />
//     <footer className="text-info bg-light">Created by Team Operation Sparkle.</footer>
// </div>

ReactDOM.render(<App />, document.getElementById("app"));