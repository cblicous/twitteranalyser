var React = require('react')

function valuesToArray (obj) {
  return Object.keys(obj).map(function (key) { return obj[key] })
}

var Items = React.createClass({
  render: function () {
    //  return <div> {JSON.stringify(this.props)} </div>

    var tweetItems = valuesToArray(this.props.tweets).map(function (item) {
      return <tr><td>{item[0].name}</td><td>{item[0].value}</td></tr>
    })
    return (
      <div className='center-block'>
        <table className='table'>
          <tbody>
            {tweetItems}
          </tbody>
        </table>
    </div>)
       // return <div> {JSON.stringify(this.props)} </div>
    /*  return <div> {JSON.stringify(this.props)} </div> */
  }
})
module.exports = Items
