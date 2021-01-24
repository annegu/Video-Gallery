import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="first" /> Talking Cats
        <input type="radio" name="src" value="second" /> Surprised Dog
        <input type="radio" name="src" value="third" /> Dancing Hummingbird
        <input type="radio" name="src" value="fourth" /> Roaring Lion
      </form>
    );
  }
}