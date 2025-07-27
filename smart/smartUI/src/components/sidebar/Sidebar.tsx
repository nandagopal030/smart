// Sidebar.tsx
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { menuItems, type MenuItemType } from '../data/menuItems';
import { FaChevronRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

interface SidebarRoute {
  path: string;
  componentName: string;
}

const Sidebar: React.FC = () => {
  
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);       // Toggled by click
  const [hovered, setHovered] = useState(false); // Toggled by hover
  const [menuDetails, setMenuDetails] = useState<MenuItemType[]>(menuItems);
  const [customRoutes, setCustomRoutes] = useState<SidebarRoute[]>([]);

  const isSidebarOpen = open || hovered;

  // Load custom routes from localStorage
  useEffect(() => {
    const storedRoutes = localStorage.getItem('customRoutes');
    if (storedRoutes) {
      setCustomRoutes(JSON.parse(storedRoutes));
    }
  }, []);

  const handleExpand = (idx: number, path: string, isChild = false) => {
    if (!menuDetails[idx].children?.length || isChild) {
      navigate(path);
    } else {
      setMenuDetails((prevDetails: MenuItemType[]) => {
        const newMenuDetails = prevDetails.map((item, index) => ({
          ...item,
          isExpand: index === idx ? !item.isExpand : false
        }));
        return newMenuDetails;
      });
    }
  };

  return (
    <div
      className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        <span>☰</span>
      </div>

      <ul className="menu-list">
        {menuDetails.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className="menu-item"
              onClick={() => handleExpand(index, item.path || '')}
            >
              {item.icon && <span className="icon"><item.icon /></span>}
              {isSidebarOpen && <span className="label">{item.label}</span>}
              {!!item.children?.length && hovered && (
                <span><FaChevronRight /></span>
              )}
            </li>
            {!!item.children?.length && item.isExpand && (
              <ul className="menu-list margin-none">
                {item.children.map((child, idx) => (
                  <li
                    key={idx}
                    className="menu-item"
                    onClick={() => handleExpand(index, `${item.path}${child.path}` || '', true)}
                  >
                    <span>{child.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}

        {/* Render Custom Routes */}
        {customRoutes.length > 0 && (
          <>
            <hr />
            {customRoutes.map((route, index) => (
              <li
                key={`custom-${index}`}
                className="menu-item"
                onClick={() => navigate(route.path)}
              >
                {isSidebarOpen && <span className="label">{route.componentName}</span>}
                {!isSidebarOpen && <span className="icon">📄</span>}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
