import React from "react";
import { connect } from "react-redux";
import fetchList from "../redux/actions";

class Header extends React.Component {
  constructor(){
    super();
    this.state ={
      topics: "",
      date: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setData() {
    const data = new Date();
    return (data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds());
  }

  handleChange({ target: { value } }) {
    const { send } = this.props;
    
    this.setState({ topics: value, date: this.setData() });
    send(value);
  }

  handleClick() {
    const { topics } = this.state;
    const { send } = this.props;
    this.setState({ date: this.setData() });
    send(topics);
  }

  render() {
    const { topics, date } = this.state;
    return (
      <div className="App">
        <h1>Selected: { topics }</h1>
        <select name="topics" id="topics" onChange={ this.handleChange }>
          <option value="frontend">frontend</option>
          <option value="reactjs">reactjs</option>
        </select>
        <span>Last update { date }</span>
        <button type="button" onClick={ this.handleClick }>refresh</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  send: (data) => dispatch(fetchList(data)),
});

export default connect(null, mapDispatchToProps)(Header);
