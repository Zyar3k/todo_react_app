import React from "react";

class AddTask extends React.Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleImportantChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate
        })
      }
    } else {
      console.log("za krótko");
    }
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div>
        <input
          type="text"
          placeholder="wpisz coś"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <br />
        <label htmlFor="important">
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleImportantChange} />
          Priorytet
        </label>
        <br />
        <label htmlFor="date">
          Termin wykonania
          <input
            type="date"
            name=""
            min={this.minDate}
            max={maxDate}
            id="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </label>
        <br />
        <button onClick={this.handleClick}>Add task</button>
      </div>
    );
  }
}

export default AddTask;
