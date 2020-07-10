import React, { useState } from 'react';
// import Button from '../components/button'

const Counter= ({name}) =>{
    const [count, setCount ] = useState(0);
    
    const increament=()=>{
        setCount(count+1)
    }
    const decreament =()=>{
        setCount(count-1)
    }

    // const handleBtnOnclick=()=>{
    //     setCount(count+1)
    // }

    return(
        <div>
          <h1>{ name }</h1>
          <button className="increament" onClick={increament}> Click To Increase </button>
          <button className="decreament" onClick={decreament}> Click To Decrease </button>
          
          {/* <div>
            <Button handleBtnOnclick={handleBtnOnclick} btnName={"Click"}/>
          </div> */}

          <h2>{count}</h2>
        </div>
    )
}


// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           count : 0
//       };
//     }

//     increament=()=>{
//         this.setState({ count : this.state.count + 1 })
//     }

//     decreament=()=>{
//         this.setState({ count : this.state.count + 1 })
//     }

//     render() {
//         return (
//           <div className="app">
//             <h2>{ this.props.name }</h2>
//             <button className="increament" onClick={this.increament}> Click To Increase </button>
//              <button className="decreament" onClick={this.decreament}> Click To Decrease </button>
//             <h2>{ this.state.count }</h2>
//           </div>
//         );
//       }
//     }

export default Counter