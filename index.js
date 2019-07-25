const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div><h1>hithere!</h1>bar</div>' }
const about = { template: ''}

const routes = [
    { path: '/documentation', component: Foo },
    { path: '/bar', component: Bar }
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  const app = new Vue({
    router
  }).$mount('#app')


  export default {
    data () {
      return {
        items: [
          {
            src: './image/gambia-New.png',
          },
          {
            src: './image/gambia-1.png',
          },
          {
            src: './image/gambia-2.png',
          },
          {
           src: './images/gambia_3.jfif',
          },
        ],
      }
    },
  }

 