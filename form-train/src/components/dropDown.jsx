import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({items}) => {
    return ( 
        <div className="col-lg-3">
            <label  className="form-label">Job position: </label>
            <select className="form-select" aria-label="Default select example">

                {items.map(item => (

                    <option key={item.id}>{item.title}</option>

                ))}
                
            </select>
        </div>
   );
}
DropDown.propTypes = {
    items: PropTypes.array
  };
 
export default DropDown;