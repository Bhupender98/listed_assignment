import React from 'react'
import { Link } from "react-router-dom";
const Board = () => {
    return (
        <div className='board-container'>
            <div className="list-container">
                <h1>Board.</h1>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="transactions">Transactions</Link>
                    </li>
                    <li>
                        <Link to="schedules">Schedules</Link>
                    </li>
                    <li>
                        <Link to="users">Users</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </div>
            <div className="btns">
                <ul>
                    <li>
                        <Link to="help">Help</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Board
