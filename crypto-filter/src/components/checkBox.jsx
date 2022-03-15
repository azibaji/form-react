import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, checkBoxHandler}) => {
    return (  
        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={checkBoxHandler}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                   {label}
                </label>
            </div>
        </div>

    );
}
CheckBox.prototype = {
    value : PropTypes.string
}
CheckBox.defaultProps = {
    label: "Is active"
  };
export default CheckBox;