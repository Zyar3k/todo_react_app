import React from "react";
import "./AddTask.scss";

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
      alert("Zadanie jest za krótkie");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className='addTask'>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Twoje zadanie..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </div>
        <div className='dateWrapper'>
          <label htmlFor="date">
            Termin do wykonania
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
        </div>
        <div className="btnWrapper">
          <label htmlFor="important">
            <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleImportantChange} />
            Priorytet
          </label>
          <button onClick={this.handleClick}>Dodaj zadanie</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
