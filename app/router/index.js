import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import EventList from '../components/EventList'
import EventForm from '../components/EventForm'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/events',
      name: 'Events',
      component: EventList
    },
    {
      path: '/events/:id',
      name: 'Event Edit',
      component: EventForm
    },
    {
      path: '/items',
      name: 'Items',
      component: ItemList
    },
    {
      path: '/items/:id',
      name: 'Item Edit',
      component: ItemForm
    }
  ]
})
