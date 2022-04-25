import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'IdRemove',
  props: {
    productId: {
      type: Number,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['getWishlist']),
  },
  methods: {
    ...mapActions(['setWishlist']),

    async removeItemFromWishlist(id) {
      const wishlist = this.getWishlist;

      const filterItem = wishlist.filter(item => id !== item.id);

      await this.setWishlist(filterItem);

      localStorage.setItem('@wishlist', JSON.stringify(filterItem));

      this.$toast.success('Produto removido da sua lista de desejos!');
    }
  }
}