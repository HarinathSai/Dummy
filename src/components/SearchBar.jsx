import React from "react";

class SearchBar extends React.Component {
    state={term:''}
    onFormSubit=(event)=>{ // we used arrow funtion her to handle the state not defind error.
        event.preventDefault() //--> it'll stop refresh when we press enter.
        console.log(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubit} >
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' placeholder="Search"
                         value={this.state.term} 
                         onChange={(e) => this.setState({term: e.target.value })} />
                    </div>
                </form>

            </div>
        )
    }
};

export default SearchBar;
