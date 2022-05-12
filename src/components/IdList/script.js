export default {
    name: 'IdList',
    components: {
      'home-produtos': () => import('../IdItem/indexItem.vue'),
    },
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    }
}