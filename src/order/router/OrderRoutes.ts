import OrderReadPage from '@/order/pages/read/OrderReadPage.vue'

const OrderRoutes = [
    {
        path: '/purchase/read/:purchaseId',
        name: 'OrderReadPage',
        components: {
            default: OrderReadPage
        },
        props: {
            default: true
        }
    },
]

export default OrderRoutes