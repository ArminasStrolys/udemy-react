import React from "react";

const Spinner = (props) => {
  return (
    <div>
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">{props.msg}</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
    msg: 'Loading...'
}

export default Spinner;
