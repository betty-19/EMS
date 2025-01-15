import {React, useState} from 'react'
import {FireFilled} from '@ant-design/icons';

// const [isSidebarVisible,setIsSidebarVisible] = useState(true);

// const handleLeftIcon = () =>{
//   setIsSidebarVisible(!isSidebarVisible)
// }
function Logo() {
  return (
    <div className='logo'>
        <div className="icons" >
            <FireFilled className='logo-icon'/>
            {/* <i class="bi bi-arrow-left" onClick={handleLeftIcon}></i> */}
        </div>
        
      
    </div>
  )
}

export default Logo
