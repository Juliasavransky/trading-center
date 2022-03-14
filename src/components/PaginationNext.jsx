import React from 'react'
import '../Styles/main.css';


const PaginationNext = ({
    next,
}) => {

    return (
        <div
            onClick={() => next()}
            className="arrow__prev">
            &#11166;
        </div>
    )
}

export default PaginationNext