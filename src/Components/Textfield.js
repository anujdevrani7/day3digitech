import React, { useState, memo } from 'react'



const Textfield=()=> {
    console.log("text field component is loaded ");
    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        father: "",
        mother: "",
        address: ""
    })

    return (
        <>
            <div className="form-floating mb-3">
                <input onChange={(event) => { setPersonalDetails({ ...personalDetails, name: event.target.value }) }} type="text" className="form-control" value={personalDetails.name} id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(event) => { setPersonalDetails({ ...personalDetails, father: event.target.value }) }} type="text" className="form-control" value={personalDetails.father} id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Father Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(event) => { setPersonalDetails({ ...personalDetails, mother: event.target.value }) }} type="text" className="form-control" value={personalDetails.mother} id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Mother Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(event) => { setPersonalDetails({ ...personalDetails, address: event.target.value }) }} type="text" className="form-control" value={personalDetails.address} id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Address</label>
            </div>
        </>
    )
}
export default memo(Textfield);