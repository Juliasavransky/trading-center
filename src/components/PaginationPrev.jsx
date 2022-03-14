import React from 'react'
import '../Styles/main.css';


const PaginationPrev = ({
    prev
}) => {

    return (
        <div
            onClick={() => prev()}
            className="arrow__next">
            &#x2B9C;
        </div>
    )
}

export default PaginationPrev