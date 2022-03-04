import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label}) => {
    return (  
        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
    label: "I am older than 18."
  };
export default CheckBox;