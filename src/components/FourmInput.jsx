import React from 'react'

function FourmInput({stateVal,onChangeHandler,type,name,label}) {
    return (
        <div className="form-control">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={stateVal}
                onChange={onChangeHandler}
            />
        </div>
    )

}
// FourmInput.defaultProps={
//     type:"text",
//     name:"default",
//     label:"default",
// }

export default FourmInput