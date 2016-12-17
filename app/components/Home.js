var React = require('react');


function puke(object) {
          console.log(object);
          return "puked"
}

  function Home(props) {
    var puked = puke(props);
    return props.isLoading === true
    ? <p>LOADING</p>
    : (
      <div> Hello from Home! {puked}</div>
    )
  }

module.exports = Home;


/*
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render: function (props) {
    return (
      <div> Hello from Home! </div>
    )
  }
}
Home.propTypes = {

};
Home.defaultProps = {

};

export default Home;
*/
