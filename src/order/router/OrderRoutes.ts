import OrderReadPage from '@/order/pages/OrderReadPage.vue'

const OrderRoutes = [
    {
        path: '/purchase/read/:purchaseId',
        name: 'OrderReadPage',
        components: {
            default: OrderReadPage
        },
    },
]

export default OrderRoutes