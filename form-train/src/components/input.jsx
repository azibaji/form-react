import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name}) => {
    return ( 
        <div className="mb-3 col-lg-6">

            <label htmlFor="exampleFormControlInput1" className="form-label">Full name : </label>

            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={name} />

        </div>
   );
}
Input.propTypes = {
    name: PropTypes.string
}
Input.defaultProps = {
    name: 'Arezou Saremian'
  };
 
export default Input;