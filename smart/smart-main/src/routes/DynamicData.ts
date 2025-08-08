import React, {  type ComponentType } from "react";
import Home from "../components/pages/Home/Home";
import JavaScript from "../components/pages/getstarted/JavaScript/JavaScript";
import ReactLang from "../components/pages/getstarted/React/ReactLang";
import Angular from "../components/pages/getstarted/Angular/Angular";
import Typography from "../components/pages/Typography/Typography";
import Forms from "../components/pages/Forms/Forms";
import Tables from "../components/pages/Tables/Tables";
import ColorPalette from "../components/pages/Color Palette/ColorPalette";
import Alerts from "../components/pages/Sidebar Components/Alerts";
import Accordian from "../components/pages/Sidebar Components/Accordian";
import Badges from "../components/pages/Sidebar Components/Badges";
import BreadCrumbs from "../components/pages/Sidebar Components/BreadCrumbs";
import Cards from "../components/pages/Sidebar Components/Cards";
import Carousel from "../components/pages/Sidebar Components/Carousel";
import DropDowns from "../components/pages/Sidebar Components/DropDowns";
import Modal from "../components/pages/Sidebar Components/Modal";
import Icons from "../components/pages/Sidebar Components/Icons";
import Navtabs from "../components/pages/Sidebar Components/Navtabs";
import Listgroup from "../components/pages/Sidebar Components/Listgroup";
import Popover from "../components/pages/Sidebar Components/Popover";
import Tooltip from "../components/pages/Sidebar Components/Tooltip";
import Toast from "../components/pages/Sidebar Components/Toast";
import Header from "../components/pages/Sidebar Components/Header";
import SideSidebar from "../components/pages/Sidebar Components/SideSidebar";
import Spinners from "../components/pages/Sidebar Components/Spinners";
import BackgroundColor from "../components/pages/Utilities/BackgroundColor";
import TextColor from "../components/pages/Utilities/TextColor";
import ZoomImage from "../components/pages/Utilities/ZoomImage";
import DataRangePicker from "../components/pages/pluggins/DataRangePicker";
import DataTables from "../components/pages/pluggins/DataTables";
import TextEditor from "../components/pages/pluggins/TextEditor";
import Select2 from "../components/pages/pluggins/Select2";
import ErrorPage from "../components/pages/Templates/ErrorPage";
import SignIn from "../components/pages/Templates/SignIn";
import SignUp from "../components/pages/Templates/SignUp";
import ForgotPassword from "../components/pages/Templates/ForgotPassword";
import Email from "../components/pages/Templates/Email";
import AddRouteForm from "./AddRouteForm";

export interface IDynamicDataType{
    path:string,
    element?:ComponentType<any>,
    children?:IDynamicDataChild[],
}
export interface IDynamicDataChild{
    path:string,
    element:ComponentType<any> ,
}

export const DynamicData:IDynamicDataType[] =[
    {
        path: '/home',
        element: Home,
        children:[]
    },
      {
        path: '/add',
        element: AddRouteForm,
        children:[]
    },
    {
        path: '/nanda',
        // element: AddRouteForm,
        children:[{path:'list', element: JavaScript }]
    },
    {
        path:'/getstarted',
        children:[{path:'javascript', element: JavaScript },
                  {path:'react', element: ReactLang },
                  {path:'angular', element:Angular}
        ]
    },
    {
        path:'typography',
        element: Typography,
        children:[]
    },
    {
        path:'forms',
        element: Forms,
        children:[]
    },{
        path:'tables',
        element: Tables,
        children:[]
    },{
        path:'colors',
        element: ColorPalette,
        children:[]
    },
    {
    path: '/components',
    children: [
      { path: 'alerts', element: Alerts },
      { path: 'accordian', element: Accordian },
      { path: 'badges', element: Badges },
      { path: 'breadcrumbs', element: BreadCrumbs },
      { path: 'cards', element: Cards },
      { path: 'carousel', element: Carousel },
      { path: 'dropdowns', element: DropDowns },
      { path: 'modal', element: Modal },
      { path: 'icons', element: Icons },
      { path: 'navtabs', element: Navtabs },
      { path: 'listgroup', element: Listgroup },
      { path: 'popover', element: Popover },
      { path: 'tooltip', element: Tooltip },
      { path: 'toast', element: Toast },
      { path: 'header', element: Header },
      { path: 'sidebar', element: SideSidebar },
      { path: 'spinners', element: Spinners },
    ]
  },
  {
    path: '/utilities',
    children: [
      { path: 'backgroundcolor', element: BackgroundColor },
      { path: 'textcolor', element: TextColor },
      { path: 'zoomimage', element: ZoomImage },
    ]
  },
  {
    path: '/plugins',
    children: [
      { path: 'datarangepicker', element: DataRangePicker },
      { path: 'datatabels', element: DataTables },
      { path: 'texteditor', element: TextEditor },
      { path: 'select2', element: Select2 },
    ]
  },
  {
    path: '/templates',
    children: [
      { path: 'errorpage', element: ErrorPage },
      { path: 'signin', element: SignIn },
      { path: 'signup', element: SignUp },
      { path: 'forgotpassword', element: ForgotPassword },
      { path: 'email', element: Email },
    ]
  }
    
] 