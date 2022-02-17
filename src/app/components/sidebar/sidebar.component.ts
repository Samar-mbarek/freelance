import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Administrateur',  icon:'person', class: '' },
    { path: '/table-list', title: 'Freelancers',  icon:'person', class: '' },
    {path:'/freelancer', title: 'Freelancer',  icon:'person', class: '' },
    { path: '/typography', title: 'Clients',  icon:'person', class: '' },
    { path: '/icons', title: 'Cours',  icon:'library_books', class: '' },
    { path: '/maps', title: 'Contact',  icon:'contacts', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
