export default {
    name: 'cabecalho',
    data() {
        return {
            open: false,
            menuList: [],
        };
    },
    watch: {
        '$router' () {
            this.updatemenuList();
        }
    },
    created () {
        this.updatemenuList();
    },
    methods: {
        navigateTo(key) {
            if(this.menuList[key].link) {
                this.$router.push({ name: this.menuList[key].link });
            }
        },
        toogleMenu () {
            this.open = !this.open;
        },
        updatemenuList () {
            this.menuList = this.$router.meta.breadcrumbs;
        }
    }
}
