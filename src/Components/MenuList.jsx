import {React, useState } from 'react';
import {Menu} from 'antd';


import { AppstoreOutlined, HomeOutlined,AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons'

function MenuList({darkTheme, setActiveContent, onMenuItemClick}) {


    
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className='menu-bar'>
        <Menu.Item key="home" icon= {<HomeOutlined/>} onClick={onMenuItemClick}>
            Home
        </Menu.Item>
        <Menu.Item 
        key="activity" 
        icon= {<AppstoreOutlined />} 
        onClick={() => {setActiveContent('viewRegistration') ; 
        onMenuItemClick()}} >
            Registered Events
        </Menu.Item>

        <Menu.SubMenu key="tasks" icon={<BarsOutlined/>} title="Tasks">
         <Menu.Item key="task-1" onClick={onMenuItemClick}>Task 1</Menu.Item>
         <Menu.Item key="task-2" onClick={onMenuItemClick}>Task 2</Menu.Item>
         <Menu.SubMenu key="subtasks" title='Subtasks'>
            <Menu.Item key="subtask-1" onClick={onMenuItemClick}>Subtask 1</Menu.Item>
            <Menu.Item key="subtask-2" onClick={onMenuItemClick}>Subtask 2</Menu.Item>
         </Menu.SubMenu>
        </Menu.SubMenu>


        <Menu.Item key="progress" icon= {<AreaChartOutlined />} onClick={onMenuItemClick}>
            Progress
        </Menu.Item>
        <Menu.Item key="payment" icon= {<PayCircleOutlined/>} onClick={onMenuItemClick}>
            Payment
        </Menu.Item>
        <Menu.Item key="setting" icon= {<SettingOutlined/>} onClick={onMenuItemClick}>
            Setting
        </Menu.Item>
      {/* {viewRegistration && <ViewRegistration/>} */}
    </Menu>
  )
}

export default MenuList
