import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
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
                        {/* <input type="password"  value={this.state.password}  onChange={(e)=>{this.setState({password:e.target.value})}}/>
                        <div>{this.state.password.length<4 ? 'Password must be greater than 3' : ''}</div> */}
                    </div>
                </form>
            </div>
        )
    }
}
export default App;