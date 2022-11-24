import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        term:'',
        password:''
    }
    onInputChange(event){
        console.log(event.target.value);
    }
    onInputClick(){
        console.log('click');
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term); //props funtion from parent
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onClick={this.onInputClick} onChange={(e)=>{this.setState({term:e.target.value.toUpperCase()})}}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default App;