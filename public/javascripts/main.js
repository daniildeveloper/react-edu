var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some h1 </h1>
        <p>Some paragraph</p>
      </div>
      );
  }
});

var GreeterForm = React.createClass({
  render: function () {
    return (
        <form>
          <input type='text' ref="name"/>
          <button>Set name </button>
        </form>
        
      );
  }
});

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
    
    /**
     * render function
     *
     */
    render: function () {
      var name = this.state.name;
      var message = this.props.message;
        return (
          
            <div>
              <h1> Hellp React </h1>
              <p> {name} </p>
              <p> {message} </p>
              
              <GreeterMessage/>
              
              <GreeterForm/>
            </div>    
        );
    }, 
    
});

//render element
ReactDOM.render(
  <Greeter name='Daniil'/>, 
  document.getElementById('app')
)




