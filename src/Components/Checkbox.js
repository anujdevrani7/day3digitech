import React, { memo } from 'react'

const Checkbox=()=> {
    console.log("Check box component is loaded");
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Basket Ball" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Basket Ball
                </label>
            </div><div className="form-check">
                <input className="form-check-input" type="checkbox" value="Football " id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Football
                </label>
            </div><div className="form-check">
                <input className="form-check-input" type="checkbox" value="Cricket" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Cricket
                </label>
            </div><div className="form-check">
                <input className="form-check-input" type="checkbox" value="Kabaddi" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Kabaddi
                </label>
            </div>
        </>
    )
}
export default memo(Checkbox);
