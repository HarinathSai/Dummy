import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {
    render() {
        return (
            <div className="ui comntainer" style={{ marginTop: '10px' }}>
                <SearchBar />
            </div>
        )
    }

};

export default App;



