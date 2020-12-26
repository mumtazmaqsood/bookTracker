import React from 'react'

export const BookHistory = () => {
    return (
        <div className="book-history">
            <h2><u>Book History</u></h2>
            
            <ul>
                <li>
                    React Novie to Nanjia
                    <button className="del-btn">Delete</button>
                </li>
                <li>
                    Java Script 
                    <button className="del-btn">Delete</button>
                </li>
                <li>
                    HTML & CSS
                    <button className="del-btn">Delete</button>
                </li>
                <li>
                    Agile Methodology
                    <button className="del-btn">Delete</button>
                </li>
            </ul>
        </div>
    )
}
