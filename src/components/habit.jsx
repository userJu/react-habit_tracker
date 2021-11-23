import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    // console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    // console.log(`habit: ${this.props.habit.name} Will unmount`);
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log(this.props.habit); 외부로부터 온 데이터는 props에 저장된다
    // 방법 1.
    // const habitName = this.props.habit.name;
    // 방법 2.
    // const { name, count } = this.props.habit;

    const { name, count } = this.props.habit; // 원래 이 방법을 사용했는데 shallow comparision때문에
    // const { name } = this.props.habit;
    // const { count } = this.props; // 이런식으로 변경해준다
    // 하지만 로직상 별로. 이렇게 하지 않고도 해결할 수 있는 방법이 있다
    return (
      <li className="habit">
        <span className="habbit-name">{name}</span>
        <span className="habbit-count">{count}</span>
        <button
          className="habit-button habbit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
