//create class
var Greeter = React.createClass({
  
    //built in function to setup default values
    getDefaultProps: function () {
      return {
        name: 'React',
        message: 'React message'
      }
    },
    
    getInitialState: function () {
      return {
        name: this.props.name
      }
    },
    
    /**
     * works on button is clicked
     *
     */
    onButtonClick: function (e) {
     e.preventDefault(); 
     
    // refs - элементы с атрибутом ref. 
    // чтобы получить значение нужно использовать value
     var name = this.refs.name.value;
     
     //update the state. So to rerender it
     this.setState({
       name: name
     });
    },
    

  
    render: function () {
      var name = this.state.name;
      var message = this.props.message;
        return (
          
            <div>
              <h1> Hellp React </h1>
              <p> {name} </p>
              <p> {message} </p>
              
              <form onSubmit={this.onButtonClick}>
                <input type='text' ref="name"/>
                <button>Set name </button>
              </form>
            </div>    
        );
    }, 
    
});

//render element
ReactDOM.render(
  <Greeter name='Daniil'/>, 
  document.getElementById('app')
)




