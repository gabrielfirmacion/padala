var Form = React.createClass({
  getInitialState: function() {
    return {
      numberOfItems: [<Item id={1} />]
    }
  },
  render: function() {
    return (
      <div id="formWrapper">
        <p>address:</p>
        <input type="text" name="address" value="Enter complete address" />
        <ul>
          {this.renderItems(this.state.numberOfItems)}
        </ul>
        <p>Special Requests</p>
        <input type="text" name="specialrequests" value="" />
        <br></br>
        <button class="submitButton">Submit</button>
        <button onClick={() => this.addItem()} class="addButton">Add Item</button>
      </div>
    )
  },
  renderItems: function(numberOfItems) {
    return numberOfItems.map(function(item){
      return item
    })
  },
  addItem: function() {
    var id = this.state.numberOfItems.length + 1
    var items = this.state.numberOfItems
    items.push(<Item id={id} />)
    this.setState({
      numberOfItems: items
    })
  }
});

var Item = React.createClass({
  render: function(){
    return(
      <div id={this.props.id}>
        <input type="text" name="name" value="name" />
        <input type="text" name="description" value="description" />
        <input type="number" name="quantity" min="1" placeholder="quantity" />
      </div>
    )
  }
})