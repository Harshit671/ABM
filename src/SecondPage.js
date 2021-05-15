import React, { useState } from 'react'
import './App.css'
import { BsCircle } from "react-icons/bs";
import { FaRss } from "react-icons/fa";
import { CgViewGrid } from "react-icons/cg";
import { AiOutlineSync } from "react-icons/ai";
import { MdEdit, MdNotificationsNone } from "react-icons/md";
import { BiArrowBack, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import AppLeft from './components/AppLeft';
import { Link } from 'react-router-dom';
import { Button, Switch, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { FiHelpCircle } from 'react-icons/fi';

const TableDataList = [
  { isOpen: false, department: 'Budget', summary: 'view create edit delete', lastUpdated: '10 min ago', status: false, extraDetails: 'All aspects in the view module', accessControl: 'all' },
  { isOpen: false, department: 'Bidding', summary: '', lastUpdated: '10 min ago', status: false, extraDetails: 'All aspects in the Bidding module', accessControl: 'some' },
  { isOpen: false, department: 'Vendor Portal', summary: 'view create', lastUpdated: '10 min ago', status: false, extraDetails: 'All aspects in the Bidding module', accessControl: 'some' },
  { isOpen: false, department: 'Purchase order/work order', summary: '', lastUpdated: '10 min ago', status: false, extraDetails: 'All aspects in the Bidding module', accessControl: 'some' },
  { isOpen: false, department: 'Permissions & access control', summary: '', lastUpdated: '1 min ago', status: false, extraDetails: 'All aspects in the Bidding module', accessControl: 'all' },
]
function SecondPage() {
  const [tableData, setTableData] = useState(TableDataList);

  const updateStatus = (id, e) => {
    console.log("ffasfasf, ", e.target.checked)
    let data = [...tableData];
    data[id].status = e.target.checked;
    setTableData(data);
  }
  const handleChange = ({target: {name, value}}, index) => {
    let data = [...tableData];
    data[index][name] = value;
    setTableData(data);
  }
  return (
    <div>
      hello
      <div className="app">

        <AppLeft />
        <div className="app__right">
          <div className="item1">
            <span><BsCircle width={'30px'} /></span><span>Kishore</span><span> <MdNotificationsNone size="30px"/></span> <span><FiHelpCircle size="30px"/></span>
          </div>
          <div className="items">
            <div className="item2">
              <p><span><FaRss color="purple" /></span>Permission</p>
              <p><span><CgViewGrid color="purple" /></span>Approval Matrix</p></div>
            <div>
              <p className="sync"><span>< AiOutlineSync /></span>Last synced 15 minutes ago</p>
            </div>

          </div>
          <div className="item3">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <BiArrowBack />
              <span style={{ color: 'purple', margin: '10px' }}>
                Management Team
              </span>
            </Link>
            < MdEdit />

          </div>
          <div className="item4">
            <p>Access Control</p>
            <p> Assigned Members</p></div>



          <table className="hoverTable">
            <thead>
              <tr>

                <td></td>
                <td>Department/Role Name</td>
                <td>Access Level</td>
                <td>Summary</td>
                <td>Last Updated</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>
                      <span onClick={() => handleChange({target: {name: 'isOpen', value: !item.isOpen}}, index)} style={{ cursor: 'pointer' }}>
                        {!!item.isOpen ? <BiMinusCircle size={30} /> : <BiPlusCircle size={30} />}
                      </span>
                    </td>
                    <td>{item.department}</td>
                    <td>
                      <Button variant="contained" className={`button ${!item.status ? `button-gray` : item.accessControl == 'all' ? `button-green` : `button-red`}`}>
                        {!item.status ? 'No Access' : item.accessControl == 'all' ? 'All Access' : 'Rescricted Access'}
                      </Button>
                    </td>
                    <td>{item.summary}</td>
                    <td>{item.lastUpdated}</td>
                    <td>
                      <Switch
                        checked={item.status}
                        name={`status${index}`}
                        onClick={(e) => updateStatus(index, e)}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </td>
                  </tr>
                  {!!item.isOpen && <tr key={index}>
                    <td colSpan="6">
                      <div>{item.extraDetails}</div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: '20%', marginLeft: '100px', maxWidth: '300px' }}>Access Control
                          <div>
                            <RadioGroup aria-label="position" name="position" defaultValue="top">
                              <FormControlLabel
                                value="top"
                                control={<Radio color="primary" name='accessControl' checked={item.accessControl == 'all'} value={'all'} onClick={(e) => { handleChange(e, index) }} />}
                                label="All Access"
                                labelPlacement="end"
                              /><span className="radio-details">Can Access All Details</span>
                              <FormControlLabel
                                value="start"
                                control={<Radio color="primary" name='accessControl' checked={item.accessControl == 'some'} value={'some'} onClick={(e) => { handleChange(e, index) }} />}
                                label="Restricted Access"
                                labelPlacement="end"
                              /><span className="radio-details">Can Access Only Assigned or Created Items</span>
                            </RadioGroup>
                          </div>
                        </div>
                        <hr style={{ margin: '0px 50px' }} />
                        <div style={{ flex: '20%' }}>Permissions
                        <div>
                            <FormControl component="fieldset">
                              <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="End"
                                labelPlacement="end"
                              />
                              <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="End"
                                labelPlacement="end"
                              />
                              <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="End"
                                labelPlacement="end"
                              /><FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="End"
                                labelPlacement="end"
                              />
                            </FormControl>
                          </div></div>

                      </div>
                    </td>
                  </tr>}
                </>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>


  )
}

export default SecondPage
