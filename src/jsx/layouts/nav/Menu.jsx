export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-025-dashboard"></i>,
        content: [
            {
                title: 'Dashboard Light',
                to: 'dashboard',
            },
            {
                title: 'Dashboard Dark',
                to: 'dashboard-dark',
            },
            {
                title: 'Jobs',
                to: 'search-jobs',
            },
            {
                title: 'Applications',
                to: 'applications',
            },
            {
                title: 'My Profile',
                to: 'my-profile',

            },
            {
                title: 'Statistics',
                to: 'statistics',
            },
            {
                title: 'Companies',
                to: 'companies',
            },
            {
                title: 'Task',
                to: 'task',
            },
        ],
    },
    {
        title: 'Jobs',
        classChange: "mm-collapse",
        iconStyle: <i className="flaticon-093-waving" />,
        content: [
            {
                title: 'Job Lists',
                to: 'job-list'
            },
            {
                title: 'Job View',
                to: 'job-view'
            },
            {
                title: 'Job Application',
                to: 'job-application'
            },
            {
                title: 'Apply Job',
                to: 'apply-job'
            },
            {
                title: 'New Job',
                to: 'new-job'
            },
            {
                title: 'User Profile',
                to: 'user-profile'
            },
        ],
    },

    {
        title:'Profile',
        classChange : "mm-collapse",
        update:"NEW",    
        iconStyle : <i className="flaticon-381-user-7"/>,
        content : [
            {
                title: 'Overview',
                to: 'profile/overview',
            },
            {
                title: 'Projects',
                to: 'profile/projects',
            },
            {
                title: 'Projects Details',
                to: 'profile/projects-details',
            },
            {
                title: 'Campaigns',
                to: 'profile/campaigns',
            },
            {
                title: 'Documents',
                to: 'profile/documents',
            },
            {
                title: 'Followers',
                to: 'profile/followers',
            },
            {
                title: 'Activity',
                to: 'profile/activity',
            },
        ],
    },
    {
        title:'Account',
        classChange : "mm-collapse",
        update:"NEW",    
        iconStyle : <i className="flaticon-381-user-4"/>,
        content : [
            {
                title: 'Overview',
                to: 'account/overview',
            },
            {
                title: 'Settings',
                to: 'account/settings',
            },
            {
                title: 'Security',
                to: 'account/security',
            },
            {
                title: 'Activity',
                to: 'account/activity',
            },
            {
                title: 'Billing',
                to: 'account/billing',
            },
            {
                title: 'Statements',
                to: 'account/statements',
            },
            {
                title: 'Referrals',
                to: 'account/referrals',
            },
            {
                title: 'Api Keys',
                to: 'account/api-keys',
            },
            {
                title: 'Logs',
                to: 'account/logs',
            },
        ]
    },
    //Ait Kit
    {
        title:'AIKit',
        classsChange: 'mm-collapse',
        update:"NEW",    
        iconStyle:  <i className="flaticon-381-internet" />,
        content : [
            {
                title:"Auto Writer",
                to:'auto-write'
            },
            {
                title:'Scheduler',
                to:'scheduled'
            },
            {
                title:'Repurpose',
                to:'repurpose'
            },
            {
                title:'RSS',
                to:'rss'
            },
            {
                title:'Chatbot',
                to:'chatbot'
            },
            {
                title:'Fine-tune Models',
                to:'fine-tune-models'
            },
            {
                title:'AI Menu Prompts',
                to:'prompt'
            },
            {
                title:'Settings',
                to:'setting'
            },
            {
                title:'Export/Import Settings',
                to:'import'
            },
        ],
    },
    //CMS
    {
        title: "CMS",
        classsChange: 'mm-collapse',
        // update:"New",
        iconStyle: <i className="fa-solid fa-gear" />,
        content: [
            {
                title: 'Content',
                to: 'content'
            },
            {
                title: 'Menu',
                to: 'menu'
            },
            {
                title: 'Email Template',
                to: 'email-template'
            },
            {
                title: 'Blog',
                to: 'blog'
            },
        ],
    },
    //Apps
    {
        title: 'Apps',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-050-info"></i>,
        content: [
            {
                title: 'Profile',
                to: 'app-profile'
            },           
            {
                title: 'Post Details',
                to: 'post-details'
            },
            {
                title: 'Email',                
                hasMenu: true,
                content: [
                    {
                        title: 'Compose',
                        to: 'email-compose',
                    },
                    {
                        title: 'Inbox',
                        to: 'email-inbox',
                    },
                    {
                        title: 'Read',
                        to: 'email-read',
                    }
                ],
            },
            {
                title: 'Calendar',
                to: 'app-calender'
            },
            {
                title: 'Shop',                
                hasMenu: true,
                content: [
                    {
                        title: 'Product Grid',
                        to: 'ecom-product-grid',
                    },
                    {
                        title: 'Product List',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Product Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Order',
                        to: 'ecom-product-order',
                    },
                    {
                        title: 'Checkout',
                        to: 'ecom-checkout',
                    },
                    {
                        title: 'Invoice',
                        to: 'ecom-invoice',
                    },
                    {
                        title: 'Customers',
                        to: 'ecom-customers',
                    },
                ],
            },
        ],
    },
    //Charts
    {
        title: 'Charts',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-041-graph"></i>,
        content: [

            {
                title: 'RechartJs',
                to: 'chart-rechart',
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',
            },
        ]
    },
    //Boosttrap
    {
        title: 'Bootstrap',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-086-star"></i>,
        content: [
            {
                title: 'Accordion',
                to: 'ui-accordion',
            },
            {
                title: 'Alert',
                to: 'ui-alert',
            },
            {
                title: 'Badge',
                to: 'ui-badge',
            },
            {
                title: 'Button',
                to: 'ui-button',
            },
            {
                title: 'Modal',
                to: 'ui-modal',
            },
            {
                title: 'Button Group',
                to: 'ui-button-group',
            },
            {
                title: 'List Group',
                to: 'ui-list-group',
            },
            {
                title: 'Cards',
                to: 'ui-card',
            },
            {
                title: 'Carousel',
                to: 'ui-carousel',
            },
            {
                title: 'Dropdown',
                to: 'ui-dropdown',
            },
            {
                title: 'Popover',
                to: 'ui-popover',
            },
            {
                title: 'Progressbar',
                to: 'ui-progressbar',
            },
            {
                title: 'Tab',
                to: 'ui-tab',
            },
            {
                title: 'Typography',
                to: 'ui-typography',
            },
            {
                title: 'Pagination',
                to: 'ui-pagination',
            },
            {
                title: 'Grid',
                to: 'ui-grid',
            },
        ]
    },
    //plugins
    {
        title: 'Plugins',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-045-heart"></i>,
        content: [
            {
                title: 'Select 2',
                to: 'uc-select2',
            },            
            {
                title: 'Sweet Alert',
                to: 'uc-sweetalert',
            },
            {
                title: 'Toastr',
                to: 'uc-toastr',
            },
            {
                title: 'Jqv Map',
                to: 'map-jqvmap',
            },
            {
                title: 'Light Gallery',
                to: 'uc-lightgallery',
            },
        ]
    },
    //Widget
    {
        title: 'Widget',        
        iconStyle: <i className="flaticon-013-checkmark"></i>,
        to: 'widget-basic',
    },
    //Forms
    {
        title: 'Forms',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-072-printer"></i>,
        content: [
            {
                title: 'Form Elements',
                to: 'form-element',
            },
            {
                title: 'Wizard',
                to: 'form-wizard',
            },
            {
                title: 'CkEditor',
                to: 'form-ckeditor',
            },
            {
                title: 'Pickers',
                to: 'form-pickers',
            },
            {
                title: 'Form Validate',
                to: 'form-validation',
            },

        ]
    },
    //Table
    {
        title: 'Table',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-043-menu"></i>,
        content: [
            {
                title: 'Table Filtering',
                to: 'table-filtering',
            },
            {
                title: 'Table Sorting',
                to: 'table-sorting',
            },
            {
                title: 'Bootstrap',
                to: 'table-bootstrap-basic',
            },

        ]
    },
    //Pages
    {
        title: 'Pages',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-022-copy"></i>,
        content: [
            {
                title: 'Error',
                hasMenu: true,
                content: [
                    {
                        title: 'Error 400',
                        to: 'page-error-400',
                    },
                    {
                        title: 'Error 403',
                        to: 'page-error-403',
                    },
                    {
                        title: 'Error 404',
                        to: 'page-error-404',
                    },
                    {
                        title: 'Error 500',
                        to: 'page-error-500',
                    },
                    {
                        title: 'Error 503',
                        to: 'page-error-503',
                    },
                ],
            },
            {
                title: 'Lock Screen',
                to: 'page-lock-screen',
            },

        ]
    },

]