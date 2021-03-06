import React from 'react';

const Button = ({label = 'Add', addNewCoin}) => {
    return ( 
        <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={addNewCoin}>{label}</button>
        </div>
   );
}
// Button.defaultProps = {
//     label : 'Sign in'
// }
 
export default Button;