import React from 'react';
/* import PropTypes from"prop-types"; */


/* const foodILike = [

  {
    id: 1,
    name : "kimchi",
    imgUrl : "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
    rating: 3

  }
  ,{
    id: 2,
    name : "ramen",
    imgUrl : "https://img.hankyung.com/photo/201904/01.19444940.1.jpg",
    rating: 3.2

  }

]; */

/* 
function Food({name}){
  console.log({name})
  return <h1>I like Potato{name}</h1>;
} */

/* function Food2(){
  return foodILike.map(food => {
    return <div key={food.id} ><h1>I like {food.name} {food.id}</h1><img src={food.imgUrl}/><h4>{food.rating}/5</h4></div>;
  })


} */


/* function App() {
  return <Food2/>
} */


/* foodILike.PropTypes ={
    name: PropTypes.string.isRequired,
    imgUrl : PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
};
 */

class App extends React.Component{
  state = {

    count:0
  }
  
  minus = () => {
      return this.setState( current => ( {count:current.count -1}));
  }

  plus = () => {
    return this.setState( 
      
      current => ( {count:current.count +1})
    
     
    
    );
  }
  
  render(){
    return <div>test {this.state.count} 
      <div>

      <button onClick={this.plus}>add</button>
      <button onClick={this.minus}>minus</button>

      </div>
      
    </div>
  };

}


export default App;
