import { mapGetters } from 'vuex';

export default {
  name: 'Home',
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