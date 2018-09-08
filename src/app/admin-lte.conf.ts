export const adminLteConf = {
  skin: 'red',

  sidebarLeftMenu: [
    { label: 'MAIN NAVIGATION', separator: true },
    // {label: 'Dashboard', route: '/', iconClasses: 'fa fa-th',
    //  pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {
      label: 'Dashboard', route: '/admin', iconClasses: 'fa fa-dashboard',
    }, {
      label: 'Categories', iconClasses: 'fa fa-files-o', route: '/admin/category/main'

    },
    {
      label: 'Posts', route: '/admin/posts', iconClasses: 'fa fa-newspaper-o'
    },
    {
      label: 'Users', iconClasses: 'fa fa-users',
      children: [
        {
          label: 'Admins', route: 'form/input-text'
        },
        {
          label: 'Editors', route: 'form/input-text'
        }
      ]
    }, { label: 'Visitors', route: '/admin/visitors', iconClasses: 'fa fa-user' },
    {
      label: 'Settings', iconClasses: 'fa fa-gear',
      children: [
        {
          label: 'Language', route: '/admin/settings/language', iconClasses: 'fa fa-language'
        },
        {
          label: 'Site Options', route: '/admin/settings/site', iconClasses: 'fa fa-globe'
        }
      ]
    }
  ]
};
