import React from 'react'
import '../Styles/main.css';


const PaginationPrev = ({
    prev,
    currentPage
}) => {
    console.log(currentPage)
    return (
        currentPage < 2
            ? <div
                onClick={() => prev()}
                className="arrow__next--none">
                &#x2B9C;
            </div>
            : <div
                onClick={() => prev()}
                className="arrow__next">
                &#x2B9C;
            </div>
    )
}

export default PaginationPrev