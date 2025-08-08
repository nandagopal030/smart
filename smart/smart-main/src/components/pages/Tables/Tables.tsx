import React, { use } from 'react'
import './Table.css'
import LocationIcon from '../../../assets/location-icon.svg'
import TableData from './TableData.json'


import AddIcon from '@mui/icons-material/Add';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { Visibility, Edit, Delete, MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import TuneIcon from '@mui/icons-material/Tune';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import UploadIcon from '@mui/icons-material/Upload';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import TextSnippetIcon from '@mui/icons-material/TextSnippet'; 
import SmsIcon from '@mui/icons-material/Sms';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


const Tables = () => {
  const headers = TableData.users[0];

  const repeatCount = 50;
  const repetedUsers = Array.from({ length: repeatCount }, () => TableData.usersList[0])
  const objTableData = TableData.objectTableData[0];
  return (
    <>
      <div className="main-container">
        <div className="main-container-contents">
          <div className="header-section">
            <div className="location-img">
              <img src={LocationIcon} alt="location-Icon" />
            </div>
            <div className="tables-section">
              <h3>Tables</h3>
              <p>A table is a data structure that organizes information into rows and columns.</p>
            </div>
          </div>
          <div className="default-flex-container">
            <div className="flex-item-heading">
              <h5>Default Table</h5>
            </div>
            <div className="flex-item-code">
              <button>
                <span><CodeIcon /></span>
                <span> Code</span>
              </button>
            </div>
          </div>

          <div className="flex-button-search">
            <div className="flex-buttons">
              <div className="add ">
                <button className='buttons'><AddIcon /></button>
              </div>
              <div className="reset">
                <button className='buttons'><RestartAltSharpIcon /></button>
              </div>
              <div className="delete">
                <button className='buttons'><DeleteSharpIcon /></button>
              </div>
              <div className="export">
                <button className='buttons'><FileDownloadSharpIcon /><span className='export'>Export</span></button>
              </div>
            </div>
            <div className="flex-search">
              <SearchIcon />
              <input type='text' className='search'
                placeholder='search here'
              />
              <TuneIcon />
            </div>
          </div>

          <div className="flex-table-container scrollable-table" style={{ maxHeight: '500px', overflowY: 'auto', border: '1px solid #ccc' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {Object.entries(headers).map(([key, value], index) => (
                    <th key={index}>
                      {key === 'checkbox' ? <input type="checkbox" /> : value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repetedUsers.map((user, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.description}</td>
                    <td >
                      <Visibility className='table-icons' style={{ marginRight: 8 }} />
                      <Edit className='table-icons' style={{ marginRight: 8 }} />
                      <Delete className='table-icons' sx={{ color: '#df271c' }} style={{ marginRight: 8 }} />
                      <MoreVert />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-table-description">
            <div className="item-showing">
              <p>Showing 1 to 25 of 57 entries</p>
            </div>
            <div className="item-buttons">

              <button className='previous-btn'>Previous</button>
              <button className='btn-1'>1</button>
              <button>2</button>
              <button>3</button>
              <button className='next-btn'>Next</button>
            </div>
          </div>
          <div className="default-flex-container">
            <div className="flex-item-heading">
              <h5>Compact / Condensed Table</h5>
            </div>
            <div className="flex-item-code">
              <button>
                <span><CodeIcon /></span>
                <span> Code</span>
              </button>
            </div>
          </div>

          <div className="flex-button-search">
            <div className="flex-buttons">
              <div className="add ">
                <button className='buttons'><AddIcon /></button>
              </div>
              <div className="reset">
                <button className='buttons'><RestartAltSharpIcon /></button>
              </div>
              <div className="delete">
                <button className='buttons'><DeleteSharpIcon /></button>
              </div>
              <div className="export">
                <button className='buttons'><FileDownloadSharpIcon /><span className='export'>Export</span></button>
              </div>
            </div>
            <div className="flex-search">
              <SearchIcon />
              <input type='text' className='search'
                placeholder='search here'
              />
              <TuneIcon />
              </div>
          </div>
          <div className="flex-table-container scrollable-table" style={{ maxHeight: '500px', overflowY: 'auto', border: '1px solid #ccc' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {Object.entries(headers).map(([key, value], index) => (
                    <th key={index}>
                      {key === 'checkbox' ? <input type="checkbox" /> : value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repetedUsers.map((user, index) => (
                  <tr key={index} >
                    <td><input type="checkbox" /></td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.description}</td>
                    <td >
                      <Visibility className='table-icons' style={{ marginRight: 8 }} />
                      <Edit className='table-icons' style={{ marginRight: 8 }} />
                      <Delete className='table-icons' sx={{ color: '#df271c' }} style={{ marginRight: 8 }} />
                      <MoreVert />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-table-description">
            <div className="item-showing">
              <p>Showing 1 to 25 of 57 entries</p>
            </div>
            <div className="item-buttons">
              <button className='previous-btn'>Previous</button>
              <button className='btn-1'>1</button>
              <button>2</button>
              <button>3</button>
              <button className='next-btn'>Next</button>
            </div>
          </div>
          <div className="default-flex-container">
            <div className="flex-item-heading">
              <h5>Card Table</h5>
            </div>
            <div className="flex-item-code">
              <button>
                <span><CodeIcon /></span>
                <span> Code</span>
              </button>
            </div>
          </div>
          

          <div className="card-search-container">
            <div className="card-search">
              <div className="c-search">
                <SearchIcon />
                <span>SearchHere</span>
                <input type='text'
                />
                <TuneIcon />
              </div>
            </div>
            <div className="card-search-buttons">
              <div className="advanced-filter">
                <FilterAltIcon />
                <h3>Advanced Filter</h3>
              </div>
              <div className="column-criteria">
                <ViewWeekIcon />
                <h3>Column Criteria</h3>
              </div>
              <div className="upload">
                <UploadIcon />
              </div>
              <div className="add-object">
                <h3>Add Object</h3>
              </div>
            </div>
          </div>



          <div className="object-table-container">
            <table className='object-table'>
              <thead className='object-table-head'>
                <tr className='object-table-row'>
                  {Object.entries(TableData.objectTableHeader[0]).map(([key, value]) => (
                    <th key={key} className='object-head'>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(objTableData).map(([key,value], index) =>(
                  <tr key={key}>
                    <td>{objTableData.objectid}</td>
                    <td>{objTableData.version}</td>
                    <td>{objTableData.officialname}</td>
                    <td>{objTableData.otheracronynm}</td>
                    <td>{objTableData.businessowner}</td>
                    <td>{objTableData.domainmanager}</td>
                    <td>{objTableData.sourcesystem}</td>
                    <td className='obj-table-data'><InsertLinkIcon /> <span>|</span><TextSnippetIcon /> </td>
                    <td className='obj-table-data'>{objTableData.datasource} <TextSnippetIcon /> <span>|</span><TextSnippetIcon /> </td>
                    <td className='obj-icons'>{objTableData.action} <SmsIcon /> <VisibilityIcon /> <EditIcon /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </>
  )
}
export default Tables