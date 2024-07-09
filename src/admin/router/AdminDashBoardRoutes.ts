import AdminDashBoardPage from '@/admin/pages/AdminDashBoardPage.vue'

const AdminDashBoardRoutes = [
    {
        path: '/admin/dashboard',
        name: 'dminDashBoardPage',
        components: {
            default: AdminDashBoardPage
        },
    },
]

export default AdminDashBoardRoutes