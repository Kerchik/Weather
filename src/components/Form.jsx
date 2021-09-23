import React from "react";

const Form = ({city, weatherMethod, setCityCallback}) => {
    const setCityHandler = (e) => {
        setCityCallback(e.target.value)
    }
    return (
        <form onSubmit={weatherMethod}>
            <input
                type="text"
                name="city"
                placeholder="City name"
                value={city}
                onChange={setCityHandler}
            />
            <button className="btn btn-warning">Check weather</button>
        </form>
    )
}

export default Form;