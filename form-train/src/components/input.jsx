import React from 'react';
import PropTypes from 'prop-types';

const Input = ({title, coinSelector}) => {
    return ( 
        <div className="mb-3 col-lg-6">

            <label htmlFor="exampleFormControlInput1" className="form-label">{title} </label>

            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='BTC' onChange={coinSelector} />

        </div>
   );
}
Input.propTypes = {
    title: PropTypes.string
}
Input.defaultProps = {
    title: 'Coin'
  };
 
export default Input;