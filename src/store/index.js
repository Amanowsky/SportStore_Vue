import Vue  from "vue";
import VueX from "vuex";
Vue.use(VueX);
const testData = [];
for (let i=1; i <= 10; i++)
    {
        testData.push({
            id: i, name: `Produkt #${i}`, category: `Kategoria ${i % 3}`,
            description: `To jest Produkt #${i}`, price: i * 50
        })
    }


export default new VueX.Store({
    strict: true,
    state: {
        products: testData, productsTotal : testData.length,
        currentPage: 1,
        pageSize: 4
    },
    getters: {
        processedProducts: state => {
            let index = (state.currentPage -1) * state.pageSize;
            return state.products.slice(index, index + state.pageSize);
        },
        pageCount: state => Math.ceil(state.productsTotal / state.pageSize)
    },
    mutations: {
        setCurrentPage(state, page){
            state.currentPage = page;
        },
        setPageSize(state,size) {
            state.pageSize = size;
            state.currentPage = 1;
        }
    }
})