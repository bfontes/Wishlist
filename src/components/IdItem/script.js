import { moneyFormatter } from '@/services/formatter/currency';

export default {
  name: 'IdItem',
  components: {
    'home-favorito': () => import('../IdFavorito/indexFavorito.vue'),
    'remove-bookmark': () => import('../IdRemove/indexRemove.vue'),
  },

  props: {
    product: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    price () {
      return moneyFormatter(this.product?.price);
    },
  },
};