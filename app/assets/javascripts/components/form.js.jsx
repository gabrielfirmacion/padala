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
        <input type="text" ref="address" name="address" placeholder="address" />
        <ul>
          {this.renderItems(this.state.numberOfItems)}
        </ul>
        <p>Special Requests</p>
        <input type="text" ref="specialrequest" name="specialrequest" placeholder="Special Requests" />
        <br></br>
        <button onClick={() => this.submitForm()} class="submitButton">Submit</button>
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
  },
  submitForm: function() {
    var address = this.refs.address.value;
    var specialrequest = this.refs.specialrequest.value;
    $.ajax({
      url: '/home',
      type: 'POST',
      data: { shipment: {address: address, specialrequest: specialrequest, user_id: this.props.data.id } },
      success: (response) => {
        console.log("added new shipment "+ response )
      },
      error: (response) => {
        console.log("this is an error " + response)
      }
    })
  }
});

var Item = React.createClass({
  render: function(){
    return(
      <div id={this.props.id}>
        <input type="text" ref="itemName" name="name" placeholder="Item Name" />
        <input type="text" ref="description" name="description" placeholder="Item description" />
        <input type="number" ref="quantity" name="quantity" min="1" placeholder="quantity" />
      </div>
    )
  }
})