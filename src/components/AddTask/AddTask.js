import React from "react";

class AddTask extends React.Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    date: this.minDate,
    importantCheck: false,
    himportantCheck: false,
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleImportantChange = (event) => {
    this.setState({
      importantCheck: event.target.checked,
    });
  };
  handleHiImportantChange = (event) => {
    this.setState({
      himportantCheck: event.target.checked,
    });
  };

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleClick = () => {
    console.log("test");
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div>
        <input
          type="text"
          placeholder="wpisz coś"
          value={this.state.value}
          onChange={this.handleTextChange}
        />
        <br />
        <label htmlFor="important">
          <input
            type="checkbox"
            name=""
            id="important"
            checked={this.state.importantCheck}
            onChange={this.handleImportantChange}
          />
          Priorytet
        </label>
        <label htmlFor="highImportant">
          <input
            type="checkbox"
            name=""
            id="highImportant"
            checked={this.state.himportantCheck}
            onChange={this.handleHiImportantChange}
          />
          Wysoki priorytet
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
