import React from 'react'
import '../Styles/main.css';


const PaginationNext = ({
    next,
    currentPage
}) => {

    return (
        currentPage > 19
            ? <div
                onClick={() => next()}
                className="arrow__prev--none">
                &#11166;
            </div>
            : <div

                onClick={() => next()}
                className="arrow__prev">
                &#11166;
            </div>
    )
}

export default PaginationNext