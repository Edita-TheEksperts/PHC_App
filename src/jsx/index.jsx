import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from 'react-router-dom'

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from './pages/ScrollToTop';

/// Dashboard
import Home from "./components/Dashboard/Home";
import DashboardDark from "./components/Dashboard/DashboardDark";
import Jobs from "./components/Dashboard/Jobs";
import Applications from "./components/Dashboard/Applications";
import MyProfile from "./components/Dashboard/MyProfile";
import Statistics from "./components/Dashboard/Statistics";
import Companies from "./components/Dashboard/Companies";
import Task from "./components/Dashboard/Task";

//Jobs
import JobLists from "./components/Jobs/JobLists";
import JobView from "./components/Jobs/JobView";
import JobApplication from "./components/Jobs/JobApplication";
import ApplyJob from "./components/Jobs/ApplyJob";
import NewJob from "./components/Jobs/NewJob";
import UserProfile from "./components/Jobs/UserProfile";

//Profile 
import Overview from './components/Profile/Overview'
import Projects from './components/Profile/Projects'
import ProjectsDetails from './components/Profile/ProjectsDetails'
import Campaigns from './components/Profile/Campaigns'
import Documents from './components/Profile/Documents'
import Followers from './components/Profile/Followers'
import Activity from './components/Profile/Activity'

//Account 
import AccountOverview from './components/Account/AccountOverview'
import AccountSettings from './components/Account/AccountSettings'

import AccountActivity from './components/Account/AccountActivity'
import AccountBilling from './components/Account/AccountBilling'
import AccountStatements from './components/Account/AccountStatements'
import AccountReferrals from './components/Account/AccountReferrals'
import AccountApiKey from './components/Account/AccountApiKeys'
import AccountLogs from './components/Account/AccountLogs'
import AccountSecurity from './components/Account/AccountSecurity'

//Aikit pages
import AutoWriter from './components/Aikit/AutoWriter';
import Scheduler from './components/Aikit/Scheduler';
import Repurpose from './components/Aikit/Repurpose';
import RSS from './components/Aikit/Rss';
import Chatbot from './components/Aikit/Chatbot';
import FineTuneModels from './components/Aikit/FineTuneModels';
import AIMenu from './components/Aikit/AIMenu';
import Settings from './components/Aikit/Settings';
import ImportExport from './components/Aikit/ImportExport';

//CMS
import Content from './components/Cms/Content';
import Menu from './components/Cms/Menu';
import EmailTemplate from './components/Cms/EmailTemplate';
import Blog from './components/Cms/Blog';

//CMS Linking Pages
import ContentAdd from './components/Cms/ContentAdd';
import AddMail from './components/Cms/AddMail';
import AddBlog from './components/Cms/AddBlog';
import BlogCategory from './components/Cms/BlogCategory';

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";

//Redux
import Todo from "./pages/Todo";

/// Widget
import Widget from "./pages/Widget";

/// Table
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";

/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import CkEditor from "./components/Forms/CkEditor/CkEditor";
import Pickers from "./components/Forms/Pickers/Pickers";
import FormValidation from "./components/Forms/FormValidation/FormValidation";

/// Pages

import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import Setting from "./layouts/Setting";
import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  const allroutes = [
    /// allroutes
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },
    { url: "dashboard-dark", component: <DashboardDark /> },
    { url: "search-jobs", component: <Jobs /> },
    { url: "applications", component: <Applications /> },
    { url: "my-profile", component: <MyProfile /> },
    { url: "statistics", component: <Statistics /> },
    { url: "companies", component: <Companies /> },
    { url: "task", component: <Task /> },

    //Jobs
    { url: "job-list", component: <JobLists /> },
    { url: "job-view", component: <JobView /> },
    { url: "job-application", component: <JobApplication /> },
    { url: "apply-job", component: <ApplyJob /> },
    { url: "new-job", component: <NewJob /> },
    { url: "user-profile", component: <UserProfile /> },
    
    //Profile
    { url: "profile/overview", component: <Overview /> },
    { url: "profile/projects", component: <Projects /> },
    { url: "profile/projects-details", component: <ProjectsDetails /> },
    { url: "profile/campaigns", component: <Campaigns /> },
    { url: "profile/documents", component: <Documents /> },
    { url: "profile/followers", component: <Followers /> },
    { url: "profile/activity", component: <Activity /> },

    //Account
    { url: "account/overview", component: <AccountOverview /> },
    { url: "account/settings", component: <AccountSettings /> },

    { url: "account/activity", component: <AccountActivity /> },
    { url: "account/billing", component: <AccountBilling /> },
    { url: "account/statements", component: <AccountStatements /> },
    { url: "account/referrals", component: <AccountReferrals /> },
    { url: "account/api-keys", component: <AccountApiKey /> },
    { url: "account/logs", component: <AccountLogs /> },
    { url: "account/security", component: <AccountSecurity /> },


     ///AiKit    
     { url: 'auto-write', component: <AutoWriter/> },
     { url: 'scheduled', component: <Scheduler/> },
     { url: 'repurpose', component: <Repurpose/> },
     { url: 'rss', component: <RSS/> },
     { url: 'chatbot', component: <Chatbot/> },
     { url: 'fine-tune-models', component: <FineTuneModels/> },
     { url: 'prompt', component: <AIMenu/> },
     { url: 'setting', component: <Settings/> },
     { url: 'import', component: <ImportExport/> },

    //Cms
    { url: 'content', component: <Content /> },
    { url: 'menu', component: <Menu /> },
    { url: 'email-template', component: <EmailTemplate /> },
    { url: 'blog', component: <Blog /> },
    { url: 'add-content', component: <ContentAdd /> },
    { url: 'add-email', component: <AddMail /> },
    { url: 'add-blog', component: <AddBlog /> },
    { url: 'blog-category', component: <BlogCategory /> },

    /// Apps
    { url: "app-profile", component: <AppProfile /> },
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },
    { url: "post-details", component: <PostDetails /> },

    /// Chart
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },
    //{ url: "chart-chartist", component: Chartist },
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },

    /// Bootstrap
    { url: "ui-alert", component: <UiAlert /> },
    { url: "ui-badge", component: <UiBadge /> },
    { url: "ui-button", component: <UiButton /> },
    { url: "ui-modal", component: <UiModal /> },
    { url: "ui-button-group", component: <UiButtonGroup /> },
    { url: "ui-accordion", component: <UiAccordion /> },
    { url: "ui-list-group", component: <UiListGroup /> },
    { url: "ui-card", component: <UiCards /> },
    { url: "ui-carousel", component: <UiCarousel /> },
    { url: "ui-dropdown", component: <UiDropDown /> },
    { url: "ui-popover", component: <UiPopOver /> },
    { url: "ui-progressbar", component: <UiProgressBar /> },
    { url: "ui-tab", component: <UiTab /> },
    { url: "ui-pagination", component: <UiPagination /> },
    { url: "ui-typography", component: <UiTypography /> },
    { url: "ui-grid", component: <UiGrid /> },

    /// Plugin
    { url: "uc-select2", component: <Select2 /> },   
    { url: "uc-sweetalert", component: <MainSweetAlert /> },
    { url: "uc-toastr", component: <Toastr /> },
    { url: "map-jqvmap", component: <JqvMap /> },
    { url: "uc-lightgallery", component: <Lightgallery /> },

    ///Redux
    { url: "todo", component: <Todo /> },
    /// Widget
    { url: "widget-basic", component: <Widget /> },

    /// Shop
    { url: "ecom-product-grid", component: <ProductGrid /> },
    { url: "ecom-product-list", component: <ProductList /> },
    { url: "ecom-product-detail", component: <ProductDetail /> },
    { url: "ecom-product-order", component: <ProductOrder /> },
    { url: "ecom-checkout", component: <Checkout /> },
    { url: "ecom-invoice", component: <Invoice /> },
    { url: "ecom-customers", component: <Customers /> },

    /// Form
    { url: "form-element", component: <Element /> },
    { url: "form-wizard", component: <Wizard /> },
    { url: "form-ckeditor", component: <CkEditor /> },
    { url: "form-pickers", component: <Pickers /> },
    { url: "form-validation", component: <FormValidation /> },

    /// table
    { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: "table-datatable-basic", component: <DataTable /> },
    { url: "table-bootstrap-basic", component: <BootstrapTable /> },

  ];  
  return (
    <>
      <Routes>
        <Route path='page-lock-screen' element={<LockScreen />} />
        <Route path='page-error-400' element={<Error400 />} />
        <Route path='page-error-403' element={<Error403 />} />
        <Route path='page-error-404' element={<Error404 />} />
        <Route path='page-error-500' element={<Error500 />} />
        <Route path='page-error-503' element={<Error503 />} />
        <Route element={<MainLayout />} >
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { menuToggle, sidebariconHover } = useContext(ThemeContext);
  return (
    <>
      <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${menuToggle ? "menu-toggle" : ""}`}>
        <Nav />
        <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>      
    </>
  )

};

export default Markup
