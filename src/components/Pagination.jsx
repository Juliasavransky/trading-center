import React from 'react'
import '../Styles/main.css';


const Pagination = ({
    // cryptoPerPage,
    // totalCrypto,
    next,
    prev
}) => {
    // const pageNumbers = [];

    // for (let i = 0; i <= Math.ceil(totalCrypto / cryptoPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    // const paginate = (number) => setCurrentPage(number)


    // pageNumbers.map((number) =>
    //     (<span key={number} onClick={() => paginate(number)}>{number}</span>))


    return (
        <div className="arrow">
            <div onClick={() => prev()} className="arrow__next">  &#x2B9C;</div>
            <div onClick={() => next()} className="arrow__prev">  &#11166;</div>
        </div>
    )
}

export default Pagination