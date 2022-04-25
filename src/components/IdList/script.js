export default {
    name: 'IdList',
    components: {
      'home-produto': () => import('../IdItem/indexItem.vue'),
    },
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    }
}