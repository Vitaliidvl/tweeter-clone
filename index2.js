import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/app';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 30
    }
    this.nextYear = this.nextYear.bind(this); //1й спосіб
    // this.nextYear = () => {
    //   this.setState(state => ({        //2й спосіб
    //     years: ++state.years
    //   }))
    //}
   }
//   state = {
//     years: 26
  // }

// nextYear = () => {
//   this.setState(state => ({    //новий спосіб
//     years: ++state.years
//   }))
// }

  nextYear() {
    
    //this.state.years++;  неправильно
    this.setState(state => ({
      years: ++state.years
    }))
  }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>Plus</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

 
const All = () => {
  return (
    <>
    <WhoAmI name="John" surname="Smith" link="http://google.com" />
    <WhoAmI name="Simon" surname="Smit&Wesson" link="http://facebook.com" />
    <WhoAmI name="Dog" surname="Staff" link="http://google.com" />
    <WhoAmI name="Mike" surname="Tyson" link="http://google.com" />
    <WhoAmI name="Sebastian" surname="Vettel" link="http://google.com" />
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById('root')
);



