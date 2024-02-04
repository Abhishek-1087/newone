import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [projectName1, setProjectName1] = useState('');
  const [task1, setTask1] = useState('');
  const [mon1, setMon1] = useState('');
  const [tue1, setTue1] = useState('');
  const [wed1, setWed1] = useState('');
  const [thu1, setThu1] = useState('');
  const [fri1, setFri1] = useState('');
  const [sat1, setSat1] = useState('');
  const [sun1, setSun1] = useState('');
  const [comment1, setComment1] = useState('');

  const [projectName2, setProjectName2] = useState('');
  const [task2, setTask2] = useState('');
  const [mon2, setMon2] = useState('');
  const [tue2, setTue2] = useState('');
  const [wed2, setWed2] = useState('');
  const [thu2, setThu2] = useState('');
  const [fri2, setFri2] = useState('');
  const [sat2, setSat2] = useState('');
  const [sun2, setSun2] = useState('');
  const [comment2, setComment2] = useState('');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleProjectNameChange1 = (event) => {
    setProjectName1(event.target.value);
  };

  const handleTaskChange1 = (event) => {
    setTask1(event.target.value);
  };

  const handleMonChange1 = (event) => {
    setMon1(event.target.value);
  };

  const handleTueChange1 = (event) => {
    setTue1(event.target.value);
  };

  const handleWedChange1 = (event) => {
    setWed1(event.target.value);
  };

  const handleThuChange1 = (event) => {
    setThu1(event.target.value);
  };

  const handleFriChange1 = (event) => {
    setFri1(event.target.value);
  };

  const handleSatChange1 = (event) => {
    setSat1(event.target.value);
  };

  const handleSunChange1 = (event) => {
    setSun1(event.target.value);
  };

  const handleCommentChange1 = (event) => {
    setComment1(event.target.value);
  };

  const handleProjectNameChange2 = (event) => {
    setProjectName2(event.target.value);
  };

  const handleTaskChange2 = (event) => {
    setTask2(event.target.value);
  };

  const handleMonChange2 = (event) => {
    setMon2(event.target.value);
  };

  const handleTueChange2 = (event) => {
    setTue2(event.target.value);
  };

  const handleWedChange2 = (event) => {
    setWed2(event.target.value);
  };

  const handleThuChange2 = (event) => {
    setThu2(event.target.value);
  };

  const handleFriChange2 = (event) => {
    setFri2(event.target.value);
  };

  const handleSatChange2 = (event) => {
    setSat2(event.target.value);
  };

  const handleSunChange2 = (event) => {
    setSun2(event.target.value);
  };

  const handleCommentChange2 = (event) => {
    setComment2(event.target.value);
  };
  const totalMon = Number(mon1) + Number(mon2);
  const totalTue = Number(tue1) + Number(tue2);
  const totalWed = Number(wed1) + Number(wed2);
  const totalThu = Number(thu1) + Number(thu2);
  const totalFri = Number(fri1) + Number(fri2);
  const totalSat = Number(sat1) + Number(sat2);
  const totalSun = Number(sun1) + Number(sun2);
  

  const totalHoursAllDays = totalMon + totalTue + totalWed + totalThu + totalFri + totalSat + totalSun;
  const totalHours1 = Number(mon1) + Number(tue1) + Number(wed1) + Number(thu1) + Number(fri1) + Number(sat1) + Number(sun1);
  const totalHours2 = Number(mon2) + Number(tue2) + Number(wed2) + Number(thu2) + Number(fri2) + Number(sat2) + Number(sun2);

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh" }} collapsed={sidebarCollapsed}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={toggleSidebar}
            collapsed={sidebarCollapsed}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<DashboardOutlinedIcon />} collapsed={sidebarCollapsed}>
            Dashboard
          </MenuItem>

          <MenuItem icon={<ScheduleOutlinedIcon />} collapsed={sidebarCollapsed}>
            TimeSheet
          </MenuItem>

          <MenuItem icon={<EmojiEventsOutlinedIcon />} collapsed={sidebarCollapsed}>
            Leave
          </MenuItem>

          <MenuItem icon={<HomeWorkOutlinedIcon />} collapsed={sidebarCollapsed}>
            Work From Home
          </MenuItem>

          <MenuItem icon={<FeedbackOutlinedIcon />} collapsed={sidebarCollapsed}>
            Feedback
          </MenuItem>

          <MenuItem icon={<RateReviewOutlinedIcon />} collapsed={sidebarCollapsed}>
            Survey
          </MenuItem>

          <MenuItem icon={<ContactSupportOutlinedIcon />} collapsed={sidebarCollapsed}>
            Service Desk
          </MenuItem>

          <MenuItem icon={<DescriptionOutlinedIcon />} collapsed={sidebarCollapsed}>
            Forms
          </MenuItem>

          <MenuItem icon={<FlightOutlinedIcon />} collapsed={sidebarCollapsed}>
            Travel
          </MenuItem>

          <MenuItem icon={<MonetizationOnOutlinedIcon />} collapsed={sidebarCollapsed}>
            Expenses
          </MenuItem>

          <MenuItem icon={<PeopleAltOutlinedIcon />} collapsed={sidebarCollapsed}>
            Resourcing
          </MenuItem>
        </Menu>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
          <MenuItem icon={<ExitToAppOutlinedIcon />} collapsed={sidebarCollapsed} onClick={handleLogout}>
            Abhishek
          </MenuItem>
        </div>
      </Sidebar>

      <main style={{ margin: '2vh', position: 'relative', width: "93%" }}>
  <h1 style={{ color: "#19105B", margin: "0", fontWeight: 'bold', textAlign: 'left' }}>
    TimeSheet
  </h1>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '2vh', fontSize: "12px" }}>
    <p style={{ color: "#19105b", margin: "0", fontWeight: 'bold', fontSize: "12px" }}>
      Total Hour {totalHours1 + totalHours2}
    </p>
    <p style={{ color: "#A6ADB3", margin: "0", fontWeight: 'bold', textAlign: 'left', fontSize: "12px" }}>
    &lt; 05 Feb 2024 - 11 Feb 2024 &gt;
    </p>
  </div>
        <div style={{ backgroundColor: '#19105B', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', marginTop: '2vh', height: '6vh' }}>
          <p style={{ color: "white", margin: 0 }}> Allocation Extension</p>
          <KeyboardArrowDownOutlinedIcon style={{ color: '#FFFFFF', cursor: 'pointer' }} onClick={toggleDropdown} />
        </div>
        {showDropdown && (
          <div style={{ backgroundColor: '#FFE5EE', border: '1px solid #ccc', marginTop: '5px', padding: '10px' }}>
            <table style={{ width: '100%'  , border:"none"}}>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Project Type</th>
                  <th>Project End Date</th>
                  <th>Allocation End Date</th>
                  <th>Allocation Extension</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td colSpan="5" style={{ textAlign: "center", backgroundColor: "White" }}>No available options</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div style={{ backgroundColor: '#19105B', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', marginTop: '2vh', height: '6vh' }}>
          <p style={{ color: "white", margin: 0 }}> TimeSheet</p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: '100%', marginTop: '2vh', borderCollapse: 'collapse', height: "auto", borderSpacing: '0', padding: '10px', border: 'none' }}>
            <thead>
              <tr style={{ backgroundColor: '#FFE5EE', width: "100%", fontSize:'11px'}}>
                <th style={{ width: '12%', padding: '10px'  , }}>Project Type</th>
                <th style={{ width: '12%', padding: '10px' }}>Project Name</th>
                <th style={{ width: '12%', padding: '10px' }}>Task</th>
                <th style={{ width: '12%', padding: '10px' }}>Comment</th>
                <th style={{ width: '6%', padding: '10px' }}>Mon 05</th>
                <th style={{ width: '6%', padding: '10px' }}>Tue 06</th>
                <th style={{ width: '6%', padding: '10px' }}>Wed 07</th>
                <th style={{ width: '6%', padding: '10px' }}>Thu 08</th>
                <th style={{ width: '6%', padding: '10px' }}>Fri 09</th>
                <th style={{ width: '6%', padding: '10px' }}>Sat 10</th>
                <th style={{ width: '6%', padding: '10px' }}>Sun 11</th>
                <th style={{ width: '6%', padding: '10px' }}>Total</th>
                <th style={{ width: '4%', padding: '10px' }}></th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td style={{ padding: '10px' }}>
                <input type="text" value="BAU Activity" readOnly style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <select value={projectName1} onChange={handleProjectNameChange1} required style={{ width: '100%' }}>
                  <option value="">Select Project Name</option>
                  <option value="BAU_001 Training & Project Knowledge">BAU_001 Training & Project Knowledge</option>
                  <option value="BAU_002 People">BAU_002 People</option>
                  <option value="BAU_003 Delivery">BAU_003 Delivery</option>
                  <option value="BAU_004 Sales">BAU_004 Sales</option>
                  <option value="BAU_005 Events">BAU_005 Events</option>
                  <option value="BAU_006 Leave">BAU_006 Leave</option>
                  <option value="BAU_007 Operations">BAU_007 Operations</option>
                </select>
              </td>

              <td style={{ padding: '10px' }}>
                <select value={task1} onChange={handleTaskChange1} required style={{ width: '100%' }}>
                  <option value="">Select Task</option>
                  <option value="Employee Wellbeing">Employee Wellbeing</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="IDE">IDE</option>
                  <option value="JMates">JMates</option>
                  <option value="People Management & Coaching">People Management & Coaching</option>
                  <option value="People Strategy">People Strategy</option>
                </select>
              </td>

              <td style={{ padding: '10px' }}>
                <input type="text" value={comment1} onChange={handleCommentChange1} placeholder="Enter Comment" style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={mon1} onChange={handleMonChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={tue1} onChange={handleTueChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={wed1} onChange={handleWedChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={thu1} onChange={handleThuChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={fri1} onChange={handleFriChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={sat1} onChange={handleSatChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={sun1} onChange={handleSunChange1} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>{totalHours1}</td>
              <td style={{ padding: '10px' }}>
                <AddIcon style={{ cursor: 'pointer' }} />
              </td>
            </tr>
            <tr>
  <td colSpan="13" style={{ padding: '10px', borderBottom: '1px solid lightgray'}}></td>
</tr>
            <tr>
              <td style={{ padding: '10px' }}>
                <input type="text" value="Sales Activity" readOnly style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <select value={projectName2} onChange={handleProjectNameChange2} required style={{ width: '100%' }}>
                  <option value="">Project Name</option>
                  <option value="Account Management">Account Management</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Opportunity">Opportunity</option>
                </select>
              </td>

              <td style={{  padding: '10px' }}>
                <select value={task2} onChange={handleTaskChange2} required style={{ width: '100%' }}>
                  <option value="">Select Task</option>
                  <option value="RAM Tracking">RAM Tracking</option>
                  <option value="PAI Partners">PAI Partners</option>
                  <option value="Wing Point Capital">Wing Point Capital</option>
                  <option value="Acora">Acora</option>
                  <option value="Primer.ai">Primer.ai</option>
                  <option value="TOM TAILOR">TOM TAILOR</option>
                </select>
              </td>

              <td style={{ padding: '10px' }}>
                <input type="text" value={comment2} onChange={handleCommentChange2} placeholder="Enter Comment" style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={mon2} onChange={handleMonChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={tue2} onChange={handleTueChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={wed2} onChange={handleWedChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={thu2} onChange={handleThuChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={fri2} onChange={handleFriChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={sat2} onChange={handleSatChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>
                <input type="number" value={sun2} onChange={handleSunChange2} required style={{ width: '100%' }} />
              </td>
              <td style={{ padding: '10px' }}>{totalHours2}</td>
              <td style={{ padding: '10px' }}>
                <AddIcon style={{ cursor: 'pointer' }} />
              </td>
            </tr>
            <tr>
  <td colSpan="13" style={{ padding: '10px', borderBottom: '1px solid lightgray' }}></td>
</tr>
            <tr>
        <td style={{ padding: '10px' }}>Total Hours</td>
        <td style={{ padding: '10px' }}></td>
        <td style={{ padding: '10px' }}></td>
        <td style={{ padding: '10px' }}></td>
        <td style={{ padding: '10px' }}>{totalMon}</td>
        <td style={{ padding: '10px' }}>{totalTue}</td>
        <td style={{ padding: '10px' }}>{totalWed}</td>
        <td style={{ padding: '10px' }}>{totalThu}</td>
        <td style={{ padding: '10px' }}>{totalFri}</td>
        <td style={{ padding: '10px' }}>{totalSat}</td>
        <td style={{ padding: '10px' }}>{totalSun}</td>
        <td style={{ padding: '10px' }}>{totalHoursAllDays}</td>
        <td style={{ padding: '10px' }}></td>
      </tr>
      <tr>
  <td colSpan="13" style={{ padding: '10px', borderBottom: '1px solid lightgray' }}></td>
</tr>
      <tr>
  <td style={{ padding: '10px' }}>Machine Hour</td>
</tr>
<tr>
  <td colSpan="13" style={{ padding: '10px', borderBottom: '1px solid lightgray' }}></td>
</tr>
<tr>
  <td style={{ padding: '10px' }}>Break Hour</td>
</tr>
<tr>
  <td colSpan="13" style={{ padding: '10px', borderBottom: '1px solid lightgray' }}></td>
</tr>
</tbody>
          </table>
        </div>
        <div style={{ position: 'absolute', bottom: '5rem', right: '1rem' }}>
          <button style={{ backgroundColor: '#19105B', color: 'white', marginRight: '10px', width: '6rem', height: '2rem' }}>Save</button>
          <button style={{ backgroundColor: '#FF6196', color: 'white', width: '7rem', height: '2rem' }}>Submit</button>
        </div>
      </main>
    </div>
  );
}

export default App;