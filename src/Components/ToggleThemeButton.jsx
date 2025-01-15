import React from 'react';
import {SunOutlined, MoonOutlined} from '@ant-design/icons';
import {Button} from 'antd';

function ToggleThemeButton( {darkTheme, toggleTheme}) {
    
  return (
    <div className="toggle">
      <Button onClick={toggleTheme}>
       { darkTheme? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </div>
  );
}

export default ToggleThemeButton
