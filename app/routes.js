import Hello from './components/Hello.vue'
import EventList from './components/Events/EventList.vue'
import EventForm from './components/Events/EventForm.vue'
import ItemList from './components/Items/ItemList.vue'
import ItemForm from './components/Items/ItemForm.vue'

export const routes = [
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
    path: '/events/new',
    name: 'New Event',
    component: EventForm
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
    path: '/items/new',
    name: 'New Item',
    component: ItemForm
  },
  {
    path: '/items/:id',
    name: 'Item Edit',
    component: ItemForm
  }
]
