import React, {Component} from 'react';


class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    this.setState({count: this.state.count + 1});
  }

  // This incorrect code will still cause tests to pass
  // <button onClick={this.incremen}>
  //   Clicked: {this.state.count}
  // </button>

  render() {
    const {count} = this.state;
    return (
        // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="counter-button" onClick={this.increment}>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          Clicked:
{' '}
{count}
        </button>
      </div>
  );
}
}

export default Counter;
