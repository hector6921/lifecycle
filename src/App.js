import React, {Component} from 'react';

class lifeCycle extends Component{
constructor(){
super();
this.state = {
  items: [],
  isLoaded: false,
  };
};
//this i swhere all of our methods live
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    return res.json();
  })
  .then(data =>{
    console.log(data);
    this.setState({
      isLoaded: true,
      items: data,
    });
  });
}

render(){
  var {isLoaded, items} = this.state;
  if(!isLoaded){
    return(
      <div>Loading... </div>
    )
  }else{
  return(
  <div className="lifeCycle">
  <div className= "Names">
  <ul>{
    items.map(el => {
      return(
        <li key= {el.id}>
        Name: {el.names} | Username: {el.username} | <a href={`https://${el.website}`}>Website</a></li>
      )
    })
  }

  </ul>
  </div>
  </div>

    );
  };
};
};
export default lifeCycle;
