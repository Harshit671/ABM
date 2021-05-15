import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { MdBusinessCenter, MdDashboard, MdSecurity } from 'react-icons/md';

export default function AppLeft() {
    return (
        <div className="app__left">
            <h2><span><FaBusinessTime /></span>MYSITE</h2>
            <button><span><MdDashboard /></span> Projects</button>
            <button><span><MdBusinessCenter color="black" /></span> Organisation Profile</button>
            <button><span><MdSecurity /></span> Access Control</button>
        </div>
    )
}