import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from "@/views/AccountView";
import AddEventView from "@/views/AddEventView";
import AdminView from "@/views/AdminView";
import AllEventsView from "@/views/AllEventsView";
import EventView from "@/views/EventView";
import LogInView from "@/views/LogInView";
import VolunteerView from "@/views/VolunteerView";
import RegisterToEventView from "@/views/RegisterToEventView";
import OrganizerView from "@/views/OrganizerView";
import MyEventsView from "@/views/MyEventsView";
import AddEventNextPageView from "@/views/AddEventNextPageView";
import UpdateEvent from "@/views/UpdateEvent";
import UpdateEventNextPage from "@/views/UpdateEventNextPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/account',
    name: 'accountRoute',
    component: AccountView
  },
  {
    path: '/myEvents',
    name: 'myEventsRoute',
    component: MyEventsView
  },
  {
    path: '/addEvent',
    name: 'addEventRoute',
    component: AddEventView
  },
  {
    path: '/addEventNextPage',
    name: 'addEventNextPageRoute',
    component: AddEventNextPageView
  },
  {
    path: '/updateEvent',
    name: 'updateEventRoute',
    component: UpdateEvent
  },
  {
    path: '/updateEventNextPage',
    name: 'updateEventNextPageRoute',
    component: UpdateEventNextPage
  },
  {
    path: '/allEvents',
    name: 'allEventsRoute',
    component: AllEventsView
  },
  {
    path: '/event',
    name: 'eventRoute',
    component: EventView
  },
  {
    path: '/logIn',
    name: 'logInRoute',
    component: LogInView
  },
  {
    path: '/organizer',
    name: 'organizerRoute',
    component: OrganizerView
  },
  {
    path: '/registerToEvent',
    name: 'registerToEventRoute',
    component: RegisterToEventView
  },
  {
    path: '/volunteer',
    name: 'volunteerRoute',
    component: VolunteerView
  },
  {
    path: '/admin',
    name: 'adminRoute',
    component: AdminView
  }
]

const router = new VueRouter({
  routes
})

export default router
