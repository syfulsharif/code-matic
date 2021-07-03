const Header = (props) => {
    console.log(props);
    return (
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    );
}
const Player = () => {
    return (
        <div className="player">
            <span className="player-name"> Sharif </span>
            <Counter />
        </div>
    );
};

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> 35 </span>
            <button className="counter-action increment"> + </button>
    </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="scoreBoard" totalPlayers={1}/>

            {/*  Players List */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);