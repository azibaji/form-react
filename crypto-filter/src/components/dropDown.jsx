import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({items, label, selectedNetwork}) => {
    return ( 
        <div className="col-lg-3">
            <label  className="form-label">{label} </label>

            <select className="form-select" aria-label="Default select example" onChange={selectedNetwork}>

                {items.map((item, index) => (

                    <option key={index}>{item}</option>

                ))}
                
            </select>
        </div>
   );
}
DropDown.propTypes = {
    items: PropTypes.array
  };
 
export default DropDown;