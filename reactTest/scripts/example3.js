
var Test = React.createClass({
    render: function() {
        var stationComponents = this.props.stations.map(function(station) {
            return <div className="station">{station.call}</div>;
        });
        return <div>{stationComponents}</div>;
    }
});



var stations = [
  {call:'station one',frequency:'000'},
  {call:'station two',frequency:'001'}
]; 

ReactDOM.render(<Test stations={stations} />, document.getElementById('container'));
ReactDOM.render(<Test stations={stations} />, document.getElementById('content'));