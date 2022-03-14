import React, { Fragment } from 'react'
import '../Styles/components/navbar.css';

function Navbar({
    key,
    name,
    image,
    price,
    change,
    id,
    handleChoice
}) {

    return (
        <Fragment>

            <div
                key={key} className='navbar'
            >

                <div
                    onClick={() => handleChoice(id)}
                    className="navbar__info">
                    <img className='navbar__info--image' src={image} alt="carneys"></img>
                    <div className="navbar__info--name">{name}</div>
                    <div className="navbar__info--price">{price.toLocaleString()}</div>
                </div>
                {
                    change > 0
                        ? <Fragment>
                            <div style={{ 'color': '#00A13B' }} className="navbar__change">{change.toLocaleString()} %
                                <span style={{ 'color': '#00A13B' }} className="navbar__change--icon"> &#8673;</span>
                            </div>

                        </Fragment>
                        : <Fragment>
                            <div style={{ 'color': '#E80074' }} className="navbar__change">{change.toLocaleString()} %
                                <span style={{ 'color': '#E80074' }} className="navbar__change--icon"> &#8675;</span>
                            </div>
                        </Fragment>
                }

            </div>

        </Fragment>

    )
}

export default Navbar



