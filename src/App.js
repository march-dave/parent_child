import React, { Component } from 'react';
import produce from 'immer';
import MyButton from './MyButton'
import List from './List'
import shortid from 'shortid'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemlist : []
    }
  }

  addItem = () => {
    if (!this.num) this.num = 0;
        this.num++;

        let newItemList = produce(this.state.itemlist, (draft)=> {
            draft.push({ no: shortid.generate(), 
                item: "아이템 " + this.num});
        })
        this.setState({ itemlist : newItemList });
}

  render() {
    return (
      <div className="container">
          <div className="well"> 
            <MyButton addItem={this.addItem} />
            <List itemList2={this.state.itemlist} />
          </div>
      </div>
    );
  }
}

export default App;