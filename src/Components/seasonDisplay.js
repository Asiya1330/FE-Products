import React from 'react';
import '../Assets/styles/seasonDisply.css';
import LoadingScreen from './loadingScreen';



const getSeason = (lat,month)=>{
    if(month >2 && month <9){
        return lat > 0 ? 'summer' : 'winter'; //northren hemisphere
    }
    else{
        console.log(lat);
        return lat > 0 ? 'winter' : 'summer'; //northren hemisphere
    }
}
class SeasonDisplay extends React.Component{

    state={ 
        lat:'',
        long:'',
        errMsg:'',
        season:'',
        seasonText:'',
        iconName:''
    }
    seasonConfig =
    {
        summer:{
            text:"its hot! lets hit the beach",
            iconName : 'sun'
        }
        ,
        winter:{
            text:"Burr, its chilly",
            iconName : 'snowflake'
        }
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            this.setState({lat:position.coords.latitude});
            this.setState({long:position.coords.longitude});
            const season = getSeason(this.state.lat,new Date().getMonth());
            console.log(new Date().getMonth());
            season == 'winter' ? this.setState({seasonText:'Burr! its Chilly'}) :  this.setState({seasonText:'its hot!, Lets hit the beach'});
            season == 'winter' ? this.setState({iconName:'snowflake'}) :  this.setState({iconName:'sun'});
            this.setState({season:season});
           
            // const {text,icon} = this.seasonConfig[season];
            // this.setState({seasonText:text});
            // this.setState({iconName:icon}) 
            
        },
        (err)=>{
            console.log(err.message);
            this.setState({errMsg:err.message})
        });
    }
    componentDidUpdate(){
       
        console.log('CDU');
    }
    componentWillUnmount(){
        console.log('CWU');

    }
    renderContent(){
        if(this.state.errMsg != '')
        return(
            <h1>{this.state.errMsg}</h1>
        );
       else if(this.state.errMsg == '' && this.state.lat!='')
        return(
            // <div>Latitude: {this.state.lat}, Longitude: {this.state.long}</div>
            <div className={`seasonDiv ${this.state.season}`}>
                <i className={`iconLeft ${this.state.iconName} massive icon`} /> 
                
                <h1 className="seasonText">{this.state.seasonText}</h1>
                <i className={`iconRight ${this.state.iconName} massive icon`} />

            </div>
        )

            return <div><LoadingScreen msg="Please allow or block!"/></div>
    }
   render(){
      return (
          <div>
              {this.renderContent()}
          </div>
      )
   }
};
export default SeasonDisplay;