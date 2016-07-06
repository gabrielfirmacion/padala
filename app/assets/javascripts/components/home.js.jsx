var Home = React.createClass({
  render: function() {
    return (
      <div id='container'>
        <Header />
        <Form data={this.props.data} />
      </div>
    )
  }
});
