var Home = React.createClass({
  render: function() {
    return (
      <div id='container'>
        <Header />
        <h1>{this.props.data.email}</h1>
      </div>
    )
  }
});
