import React from 'react';
import CountDetail from './CountDetail';
import Header from './Header';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { number: '', term: '', result: '', count: 0, renderingCount: 'false', hint: ''};
    }
    componentDidMount(){
        const num = Math.floor(Math.random() * 100) + 1;
        this.setState({
            number: num
        });
    }
    checkRandomNumber = (e) => {
        if(parseInt(this.state.term) === this.state.number){
            this.setState({ result: 'Congratulations! You got it right!', renderingCount: 'true'});
        }else if(this.state.term === ''){
            this.setState({ result: 'Give some Value'});
        }else {
            this.setState({ result: 'Wrong'});
        }
        console.log(this.state.number,this.state.term);
        this.setState({ count: this.state.count+1})
        if(parseInt(this.state.term) > this.state.number){
            this.setState({ hint: 'Your Last guess was high!'});
        }else{
            this.setState({ hint: 'Your Last guess was low!'})
        }
        e.preventDefault();
    }
    render(){
        const renderCount = () => {
            if(this.state.renderingCount === 'true'){
                return <CountDetail count={this.state.count} />
            }
            else{
                return (
                    <h3>{this.state.hint}</h3>
                )
            }
        }
        const changeColor = () => {
            if(this.state.result === 'Wrong'){
                return <h3 style={{ color: 'red'}}>{this.state.result}</h3>;
            }else{
                return <h3 style={{ color: 'green'}}>{this.state.result}</h3>;
            }
        }
        return(
            <div className="App">
                <Header />
                <label>Enter a Guess : </label>
                <input 
                value={this.state.term}
                onChange={ e=> this.setState({ term: e.target.value})}
                type="text"
                disabled={this.state.renderingCount === 'true' ? true : false}
                ></input>
                <button 
                 style={{marginLeft:'5px'}}
                  onClick={this.checkRandomNumber}
                  disabled={this.state.renderingCount === 'true' ? true : false}
                  >submit</button>
                {changeColor()}
                {renderCount()}
            </div>
        );
    }
}

export default App;