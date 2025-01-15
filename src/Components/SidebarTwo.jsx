import { useState } from 'react';
import { Layout, theme } from 'antd'; // Import theme here
import Logo from './Logo.jsx';
import '../assets/sidebarTwo.css';
import { MenuOutlined} from '@ant-design/icons';
import MenuList from './MenuList.jsx';
import ViewRegistration from './ViewRegistration.jsx';
import Detail from './Detail.jsx';

const {  Sider, Content } = Layout;

function SidebarTwo() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);
    
    const [activeContent, setActiveContent] = useState(null); // For dynamic content
    const [showDetail, setShowDetail] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    



    const toggleSidebar = () =>{
        setIsSidebarVisible(!isSidebarVisible);
    }
   
    const handleMenuItemClick = () =>{
        setIsSidebarVisible(false);
    }

    const handleViewDetail = (rowData) =>{
        setSelectedRow(rowData);
        setShowDetail(true);
        
    }
    const handleBackToViewRegistration = () => {
        setSelectedRow(null);
        setShowDetail(false);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken(); 
    

    return (
        <Layout className='sideee'>

            


            <Sider
              
                className={`sidebar ${isSidebarVisible? 'visible' : '' }` }
                width={250}
                trigger={null}
            >
               
                <Logo/>
                <MenuList 
                     darkTheme={darkTheme} 
                     onMenuItemClick={handleMenuItemClick}
                     setActiveContent={setActiveContent}
                />
               
               
            </Sider>
            <Layout>
                
                <Content
                    style={{
                        background: colorBgContainer,
                    }}
                    className="content-area"
                >
                    <div className='menu-bar-icon' onClick={toggleSidebar}>
                  <MenuOutlined className='menuu-icon'/>
            </div>
         
                    {activeContent === 'viewRegistration' && !showDetail && (<ViewRegistration onViewDetail= {handleViewDetail}/> )}
                    {showDetail && <Detail onBack={handleBackToViewRegistration} rowData={selectedRow}/>}
                </Content>
            </Layout>
        </Layout>
    );
}

export default SidebarTwo;
