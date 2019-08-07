import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(){
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        const API = ' https://api.jsonbin.io/b/5b97f370db948c68635f6dbc'

        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({data}))
            .catch(err => console.log(err))
    }

    render() {
        const {data} = this.state

        if(data.length <= 0)
            return <div className='loading'>Loading...</div>

        return (
            <div className="App">
                {
                    data && data.data.map(d => <div key={d.id}>
                        {d.name}
                    </div>)
                }
            </div>
        );
    }
}

export default App;
