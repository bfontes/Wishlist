import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'IdFavorito',
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      checked: false,
    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getWishlist']),

    isChecked () {
      return this.checked ? '#C32B1B' : '#fff' ;
    },
  },

  created() {
    this.inWishlist();
  },
  methods: {
    ...mapActions(['setWishlist']),

    async toogleWishlist() {
      const wishlist = this.getWishlist;

      if(this.checked) {
        const filterItem = wishlist.filter(prod => this.itemId !== prod.id);

        await this.setWishlist(filterItem);

        localStorage.setItem('@wishlist', JSON.stringify(filterItem));  

        this.checked = !this.checked;

        this.$toast.success('Produto removido da sua lista de desejos!');

      } else {
        const products = this.getProducts;

        const item = products.find(prod => this.itemId === prod.id);

        const newWishlist = [...wishlist, item];
       
        await this.setWishlist(newWishlist);

        localStorage.setItem('@wishlist', JSON.stringify(this.getWishlist));      

        this.checked = !this.checked;

        this.$toast.success(`🎉 ${item.title} agora esta na sua lista de desejos!`);
      }
    },

    inWishlist () {
      const validator = Boolean(this.$store.state.wishlist.find(prod => this.itemId === prod.id));

      this.checked = validator;

      return validator;
    }
  }
};