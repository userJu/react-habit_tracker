import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef(); // createRef()는 실행할때마다 만들고 useRef()는 한번만 만들고 저장해준다
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
    // formref라는 것을 하나 더 만들고
    // this.formRef.current.reset()하는것이 정석이긴 하다
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});
export default HabitAddForm;
