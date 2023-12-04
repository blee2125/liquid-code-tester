import React, { useState, useEffect } from "react";

function ExpectedValue(props) {
  const [value, setValue] = useState('');

  const handleChange = (val) => {
    setValue(val);
    //onChange();
  };

  useEffect(() => {
    props.setExpected(value)
    // eslint-disable-next-line
  }, [value])

  return (
    <>
      ExpectedValue
      <form>
        <input
          type="text"
          onChange={e => handleChange(e.target.value)}
        />
      </form>
    </>
  );
}

export default ExpectedValue;