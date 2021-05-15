import React, { useState } from 'react';
import './App.css';
import { BsCircle } from "react-icons/bs";
import { FaRss } from "react-icons/fa";
import { CgViewGrid } from "react-icons/cg";
import { AiOutlineSync } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";

import { MdNotificationsNone } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";



import AppLeft from './components/AppLeft';
import { Button, TableHead } from '@material-ui/core';
import { Link } from 'react-router-dom';


const TableDataList = [
  { isOpen: false, department: 'Mangement Team',status:'All Access' ,Nom: '4', lastUpdated: '1 min ago' },
  { isOpen: false, department: 'Procuremnt Team',status:'Restricted Access', Nom: '8', lastUpdated: '1 min ago' },
  { isOpen: false, department: 'Project Team',status:'Restricted Access', Nom: '16', lastUpdated: '1 min ago' },
  { isOpen: false, department: 'IT Team',status:'Restricted Access' ,Nom: '4', lastUpdated: '1 min ago' },
  { isOpen: false, department: 'Super Admin',status:'All Access', Nom: '1', lastUpdated: '1 min ago' },
]

function Firstpage() {

  const [tableData, setTableData] = useState(TableDataList);

  return (
    <div>
      <div className="app">


        <AppLeft />
        <div className="app__right">
          <div className="item1">
            <span><BsCircle /></span><span style={{ fontSize: "20px" }}>Kishore</span><span> <MdNotificationsNone size="30px" /></span> <span><FiHelpCircle size="30px" /></span>
          </div>
          <div className="items">
            <div className="item2">
              <p><span><FaRss color="purple" /></span>Permission</p>
              <p><span><CgViewGrid color="purple" /></span>Approval Matrix</p></div>
            <div>
              <p className="sync"><span>< AiOutlineSync /></span>Last synced 15 minutes ago</p>
            </div>
          </div>
          <div>
            <div className="btn-group">

              <button className="btn">+ Add Role</button>

              <span className="ic"><MdEdit size="25px" /></span><span className="ic" ><RiDeleteBin7Line size="25px" /></span>
            </div>

            <table className="hoverTable">
              <tr>
                <td>Department/Role Name</td>
                <td>Access Level</td>
                <td>NO of Members</td>
                <td>Last Updated</td>
                <td></td>
              </tr>
              {tableData.map((item, index) => (
                <>
                  <tr key={index}>

                    <td>{index == 0 ? <Link to="/SecondPage">{item.department}</Link> : item.department}</td>
                    <td>
                      <Button variant="contained" className={`button ${item.status == 'All Access' ? `button-green` : `button-red`}`}> 
                     { item.status == 'All Access' ? 'All Access' : 'Rescricted Access'}
                      </Button>
                    </td>
                    <td>{item.Nom}</td>
                    <td>{item.lastUpdated}</td>
                    <td>
                      <AiOutlineEye />
                    </td>
                  </tr>
                </>
              ))}

            </table>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Firstpage
