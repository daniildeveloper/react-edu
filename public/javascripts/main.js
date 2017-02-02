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
  onFormSubmit: function (e) {
   e.preventDefault();//prevent browser from refreshing
   
  // get name
   var name = this.refs.name.value;
   
   if (name.length > 0) {
     this.refs.name.value = '';
     this.props.onNewName(name);
   }
  },
  render: function () {
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref="name"/>
          <button>Set name </button>
        </form>
        
      );
  }
});

var GreeterMessageForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    
    //get messge string
    var message = this.refs.message.value;
    
    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref="message"/>
        <button>Set message </button>
      </form>);
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
        name: this.props.name,
        message: this.props.message
      }
    },
    
    /**
     * works on button is clicked
     *
     */
    handleNewName: function (name) {
     this.setState({
       name: name
     })
    },
    
    handleNewMessage: function (message) {
      this.setState({
        message:message
      });
    },
    
    /**
     * render function
     *
     */
    render: function () {
      var name = this.state.name;
      var message = this.state.message;
        return (
          
            <div>
              <h1> Hellp React </h1>
              <p> {name} </p>
              <p> {message} </p>
              
              <GreeterMessageForm onNewMessage={this.handleNewMessage}/>
              
              <GreeterForm onNewName={this.handleNewName}/>
            </div>    
        );
    }, 
    
});

//render element
ReactDOM.render(
  <Greeter name='Daniil'/>, 
  document.getElementById('app')
)




