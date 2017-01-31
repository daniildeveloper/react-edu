//create class
var Greeter = React.createClass({
    
    onButtonClick: function (e) {
     e.preventDefault(); 
     
    // refs - элементы с атрибутом ref. 
    // чтобы получить значение нужно использовать value
     var name = this.refs.name.value;
     
     alert(name);
    },
  
    render: function () {
      var name = this.props.name;
        return (
          
            <div>
              <h1> Hellp React </h1>
              <p> {name} </p>
              
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




