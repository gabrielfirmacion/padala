var Home = React.createClass({
  render: function() {
    return (
      <div id='formContainer'>
        <Header />
        <Form data={this.props.data} />
      </div>
    )
  }
});