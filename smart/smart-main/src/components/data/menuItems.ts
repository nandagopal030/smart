// src/data/menuItems.ts
import type { IconType } from 'react-icons';
import { FaHome, FaRocket, FaFont, FaWpforms, FaTable, FaPalette, FaPuzzlePiece, FaTools, FaPlug, FaNewspaper, } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";

export interface MenuItemType extends IMenuItems {
  children?: IMenuItems[];
  isExpand?: boolean;
  icon: IconType;
}
export interface IMenuItems {
  label: string;
  path?: string;
}

export const menuItems: MenuItemType[] = [
  {
    label: 'Home',
    icon: FaHome,
    path: '/home',
    children: [],
    isExpand: false
  },
    {
    label: 'Add',
    icon: IoIosAdd,
    path: '/add',
    children: [],
    isExpand: false
  },
  {
    label: 'Get Started',
    icon: FaRocket,
    path: '/getstarted',
    children: [{ label: 'Javascript', path: '/javascript' },
    { label: 'React', path: '/react' },
    { label: 'Angular', path: '/angular' }
    ],
    isExpand: false
  },
  {
    label: 'Typography',
    icon: FaFont,
    path: '/typography',
    children: [],
    isExpand: false
  },
  {
    label: 'Forms',
    icon: FaWpforms,
    path: '/forms',
    children: [],
    isExpand: false
  },
  {
    label: 'Tables',
    icon: FaTable,
    path: '/tables',
    children: [],
    isExpand: false
  },
  {
    label: 'Color palette',
    icon: FaPalette,
    path: '/colors',
    children: [],
    isExpand: false,
  },
  {
    label: 'Components',
    icon: FaPuzzlePiece,
    path: '/components',
    children: [{label : 'Alerts', path: '/alerts'},
               {label : 'Accordian', path: '/accordian'},
               {label : 'Badges', path: '/badges'},
               {label : 'Breadcrumbs', path: '/breadcrumbs'},
               {label : 'Buttons', path: '/buttons'},
               {label : 'Cards', path: '/cards'},
               {label : 'Carousel', path: '/carousel'},
               {label : 'Dropdowns', path: '/dropdowns'},
               {label : 'Modal', path: '/modal'},
               {label : 'Icons', path: '/icons'},
               {label : 'Navs & Tabs', path: '/navtabs'},
               {label : 'Listgroup', path: '/listgroup'},
               {label : 'popover', path: '/popover'},
               {label : 'Tooltip', path: '/tooltip'},
               {label : 'Toast', path: '/toast'},
               {label : 'Header', path: '/header'},
               {label : 'Sidebar', path: '/sidebar'},
               {label : 'Spinners', path: '/spinners'},            
       
    ],
    isExpand: false
  },
  {
    label: 'Utilities',
    icon: FaTools,
    path: '/utilities',
    children: [{ label: 'Background Color', path: '/backgroundcolor' },
    { label: 'Text Color', path: '/textcolor' },
    { label: 'Zoom Image', path: '/zoomimage' }
    ],
    isExpand: false
  },
  {
    label: 'Plugins',
    icon: FaPlug,
    path: '/plugins',
    children: [{ label: 'Data Range Picker', path: '/datarangepicker' },
    { label: 'Data Tables', path: '/datatabels' },
    { label: 'Text Editor', path: '/texteditor' },
    { label: 'Select2', path: '/select2' }
    ],
    isExpand: false
  },
  {
    label: 'Templates',
    icon: FaNewspaper,
    path: 'templates',
    children: [{ label: 'Error Page', path: '/errorpage' },
    { label: 'Sign In', path: '/signin' },
    { label: 'Sign Up', path: '/signup' },
    { label: 'Forgot Password', path: '/forgotpassword' },
    { label: 'E-mail', path: '/email' },
    ],
    isExpand: false
  },
];
