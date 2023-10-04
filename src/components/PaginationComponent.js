import React, { useState} from 'react';
// import {  useNavigate  } from "react-router-dom";
import List from './List';
import data from '../data/carsData.json'
import styles from './Paginator.module.css';
function PaginationComponent(props) {
    // const history =  useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    // Component logic will be added here
    const totalPages = 10; // This can vary based on data
    const pageNumbers = [];

    function handlePrevious() {
        if (currentPage > 1) {
            handleChangePage(currentPage - 1);
        }
    }

    function handleNext() {
        if (currentPage < totalPages) {
            handleChangePage(currentPage + 1);
        }
    }

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const [itemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const activeStyle = {
        backgroundColor: '#6200ea',
        color: '#ffffff'
    };
    
  

  const handleChangePage = (page) => {
    setCurrentPage(page);
    // history(`/page/${page}`);
  };

    return (
        <div>
            <List results={currentItems}/>
            
            <button className={styles.pageButton} onClick={handlePrevious}>Previous</button>
            {/* Page numbers rendering here */}
            {pageNumbers.map(number => (
                <button style={currentPage === number ? activeStyle : {}} className={styles.pageButton} key={number} onClick={() => setCurrentPage(number)}>
                    {number}
                </button>
            ))}

            <button className={styles.pageButton} onClick={handleNext}>Next</button>
        </div>
    );
}

export default PaginationComponent;