import api from '@/services/api';
import { mapActions } from 'vuex';

export default {
  name: 'MainLayout',
  components: {
    'cabecalho': () => import('@/components/IdHeader/indexHeader.vue'),
    'cabecalho--navbar': () => import('@/components/IdNavbar/indexNavbar.vue'),
  },
 
  created () {
    this.fetchProducts();
    this.fetchWishlist();
  },
  methods: {
    ...mapActions(['setProducts', 'setWishlist']),
  
    async fetchProducts () {
      const items = new api.Products();

      let loader = this.$loading.show({
        loader: 'bars',
        color: '#5B2C82',
        container: this.$refs.list,
        canCancel: true,
        onCancel: this.onCancel,
      });

      try {
        const {data: res} = await items.getProducts();

        this.setProducts(res.products);
      } catch (err) {
        this.$toast.error('Erro ao carregar produtos');
        console.error(err)
      } finally {
        loader.hide();
      }
    },

    fetchWishlist () {
      if(localStorage.getItem('@wishlist') !== null) {
        this.setWishlist(JSON.parse(localStorage.getItem('@wishlist')));
      } else {
        localStorage.setItem('@wishlist', JSON.stringify([])); 
      }
    }
  }
}
