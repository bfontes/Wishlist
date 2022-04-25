import { mapGetters } from  'vuex';
import { moneyFormatter } from '@/services/formatter/currency';

export default {
  name: 'ProductView',
  components: {
    'home-favorito': () => import('@/components/IdFavorito/indexFavorito.vue'),
  },
  data () {
    return {
      item: {
        id: 0,
        sku: 0,
        title: '0',
        description: '',
        availableSizes: {
          S: 0,
          G: 0,
          GG: 0,
          GGG: 0
        },
        style: '',
        price: 0,
        installments: 0,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: false,
        image: ''
      },
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    price () {
      if(this.item.price) {
        return moneyFormatter(this.item?.price);
      }
      return moneyFormatter(0);
    },
  },
  mounted () {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct () {
      const products = await this.getProducts;
      const product = products.find(prod => this.$route.params.sku === prod.sku);
      this.item = product;
    }
  }
}