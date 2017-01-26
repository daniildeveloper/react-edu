//create class
var Greeter = React.createClass({
    render: function () {
      var name = this.props.name;
        return (
          
            <div>
              <h1> Hellp React </h1>
              <p> {name} </p>
            </div>    
        );
    }, 
    
});

//render element
ReactDOM.render(
  <Greeter name='Daniil'/>, 
  document.getElementById('app')
)




