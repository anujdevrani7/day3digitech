import React, { memo, useState } from 'react'



const  Radio=()=> {
    const [gender, setGender] = useState("");
    console.log("radio component is loaded");

   





    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={() => { setGender("Male"); }} value={gender} id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={() => { setGender("female") }} value={gender} id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Female
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={() => { setGender("transgender") }} value={gender} id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    transgender
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={() => { setGender("pangender") }} value={gender} id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    pangender
                </label>
            </div>

        </>
    )
}
export default memo(Radio);