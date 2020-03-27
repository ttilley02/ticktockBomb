import React from 'react';

class Bomb extends React.Component{
    constructor(){
      super()
      this.state={
        count: 0,
      }
    }

    componentDidMount() {
      setInterval(() => {
        let newCount = this.state.count
        newCount++
        if(newCount > 8){
          newCount = 0;
        }
        this.setState({count: newCount})
      }, 1000)

    }

    ticking = () =>{
      if(this.state.count === 8){
        return(
          <div>
            <p>
              Boom!!!
            </p>
          </div>
        )
      }
    

      else if(this.state.count % 2 === 0){
        return(
          <div>
            <p>
              tick
            </p>
          </div>
        )
      }
      else if(this.state.count % 2 !== 0){
        return(
          <div>
            <p>
              tock
            </p>
          </div>
        )
      }
    }
   
    render(){
    return(
      <div>
        {this.ticking()}
      </div>
    )
  }
}

export default Bomb