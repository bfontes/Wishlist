import { mapGetters } from 'vuex';

export default {
  name: 'ProductsView',
  components: {
    'home-lista': () => import('@/components/IdList/indexList.vue'),
  },
  computed: {
    ...mapGetters([
      'getProducts',
      'getWishlist'
    ]),
    items () {
      return this.$route.name === 'Home' ? this.getProducts : this.getWishlist;
    }
  },
};