import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import Card from './Card';
import "./Vector.svg";
import ApexChart from './ApexChart';
import PieChart from './PieChart';
const Dashboard2 = () => {
    return (
        <div className='main_container'>
            <div className="nav-bar">
                <h1>Dashboard</h1>
                <div className="search-profile">
                    <div className="search-box">
                        <input type="search" name="search" id="search" placeholder='Search...' />
                        <BiSearch style={{ height: "12px;", width: "12px;", color: "gray" }} />
                    </div>
                    <BsFillBellFill style={{ height: "20px;", width: "18px;", color: "gray" }} />
                    <img src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=360" alt="user" id='avatar'/>
                </div>
            </div>
            {/* cards container  */}
            <div className="cards-container">
                <Card type="Total Revenue" data="2,129,430" bgcolor="#DDEFE0" />
                <Card type="Total Transactions" data="1,520" bgcolor="#F4ECDD" />
                <Card type="Total Likes" data="9,721" bgcolor="#EFDADA" />
                <Card type="Total Users" data="892" bgcolor="#DEE0EF" />
            </div>
            {/* graph container  */}
            <ApexChart/>
            {/* pie chart and scheduled activities  */}
            <div className="pie_chart_schedule">
                <div className="pie_chart">
                    <PieChart />
                </div>
                <div className="schedule">
                    <div className="title_div">
                        <h2>Today's schedule</h2>
                        <p><a href="/">See All &gt;</a></p>
                    </div>
                    <div className="timing_event">
                        <div className="meetings">
                            <h3>Meetings with suppliers from kuta Bali</h3>
                            <p className='timing'>14.00 - 15.00</p>
                            <p>At Sunset Road, Kuta, Bali</p>
                        </div>
                        <div className="operations">
                            <h3>Check Operation at Giga Factory 1</h3>
                            <p className='timing'>18.00 - 20.00</p>
                            <p>.at Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard2
