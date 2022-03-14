import React, { Fragment } from 'react';
import '../Styles/main.css';


const Search = ({
    handelChange,
    handleSubmit,
    currency,

}) => {

    return (
        <Fragment>
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handelChange}
                    type="text"
                    id="input"
                    placeholder='Search for Your Crypto currency'
                    className="form__input"
                    required
                    value={currency}
                />
                {/* <button type="submit" className="form__btn">Search</button> */}
            </form>
        </Fragment>
    )
}

export default Search

