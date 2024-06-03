// 引入 Vue 3 的路由模块
import { createRouter, createWebHistory } from 'vue-router';
import AdminBaseLayout from '../components/AdminBaseLayout.vue';
import UserBaseLayout from '../components/UserBaseLayout.vue';

// 定义路由
const routes = [
    {
        path: '/',
        redirect: '/personalBank/user/login'
    },
    {
        path: '/personalBank/user/login',
        name: 'login',
        component: () => import('../views/PersonalBank/LoginView.vue')
    },
    {
        path: '/personalBank/admin/login',
        name: 'adminLogin',
        component: () => import('../views/PersonalBank/AdminLoginView.vue')
    },
    {
        path: '/personalBank/user/register',
        name: 'register',
        component: () => import('../views/PersonalBank/RegisterView.vue')
    },
    {
        path: '/personalBank/user/forget',
        name: 'forget',
        component: () => import('../views/PersonalBank/ForgetPassword.vue')
    },
    {
        path: '/personalBank/user',
        component: UserBaseLayout,
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: () => import('../views/PersonalBank/UserProfile.vue')
            },
            {
                path: 'account',
                name: 'account',
                component: () => import('../views/PersonalBank/InfoManage.vue')
            },
            {
                path: 'transfer',
                name: 'transfer',
                component: () => import('../views/PersonalBank/TransDetail.vue')
            }
        ]
    },
    {
        path: '/personalBank/admin',
        component: AdminBaseLayout,
        children: [
            {
                path: 'privilege',
                name: 'privilege',
                component: () => import('../views/PersonalBank/Privilege.vue')
            },
            {
                path: 'blackList',
                name: 'blackList',
                component: () => import('../views/PersonalBank/BlackList.vue')
            },
        ]
    },
    {
        path: '/creditCard/inspector/login',
        name: 'loginInspector',
        component: () => import('../views/CreditCard/login/InspectorLoginView.vue')
    },
    {
        path: '/creditCard/admin/login',
        name: 'loginAdmin',
        component: () => import('../views/CreditCard/login/AdminLoginView.vue')
    },
    {
        path: '/creditCard/customer/login',
        name: 'loginCustomer',
        component: () => import('../views/CreditCard/login/CustomerLoginView.vue')
    },
    {
        path: '/creditCard/customer/info',
        name: 'customerInfo',
        component: () => import('../views/CreditCard/customer/CustomerInfoView.vue')
    },
    {
        path: '/creditCard/customer/card',
        name: 'cardInfo',
        component: () => import('../views/CreditCard/customer/AboutCreditCardView.vue')
    },
    {
        path: '/creditCard/customer/pay',
        name: 'bankPay',
        component: () => import('../views/CreditCard/customer/BankPayView.vue')
    },
    {
        path: '/creditCard/customer/simulation',
        name: 'paymentSimulation',
        component: () => import('../views/CreditCard/customer/PaymentSimulationView.vue')
    },
    {
        path: '/creditCard/customer/response',
        name: 'responseOfRequest',
        component: () => import('../views/CreditCard/customer/ResponseView.vue')
    },
    {
        path:'/creditCard/admin/inspector',
        name:'adminManageInspector',
        component:()=>import('../views/CreditCard/admin/ManageInspectorView.vue')
    },
    {
        path:'/creditCard/inspector/request',
        name:'responseToRequests',
        component:()=>import('../views/CreditCard/inspector/CustomerRequestView.vue')
    },
    {
        path: '/counter/admin/login',
        name: 'loginAdminOfCashier',
        component:()=>import('../views/Counter/login/AdminLoginView.vue')
    },
    {
        path: '/counter/cashier/login',
        name: 'loginCashier',
        component:()=>import('../views/Counter/login/CashierLoginView.vue')
    },
    {
        path: '/counter/admin/cashier',
        name: 'adminManageCashier',
        component:()=>import('../views/Counter/admin/ManageCashierView.vue')
    },
    {
        path: '/counter/cashier/currentDeposit',
        name: 'cashierCurrentDeposit',
        component:()=>import('../views/Counter/cashier/CurrentDepositView.vue')
    },
    {
        path: '/counter/cashier/currentWithdrawal',
        name: 'cashierCurrentWithdrawal',
        component:()=>import('../views/Counter/cashier/CurrentWithdrawalView.vue')
    },
    {
        path: '/counter/cashier/freeAndUnfreeze',
        name: 'cashierFreeAndUnfreeze',
        component:()=>import('../views/Counter/cashier/FreezeAndUnfreezewView.vue')
    },
    {
        path: '/counter/cashier/lossAndReissue',
        name: 'cashierLossAndReissue',
        component:()=>import('../views/Counter/cashier/LossAndReissueView.vue')
    },
    {
        path: '/counter/cashier/openAccount',
        name: 'cashierOpenAccount',
        component:()=>import('../views/Counter/cashier/OpenAccountView.vue')
    },
    {
        path: '/counter/cashier/timeDeposit',
        name: 'cashierTimeDeposit',
        component:()=>import('../views/Counter/cashier/TimeDepositView.vue')
    },
    {
        path: '/counter/cashier/timeWithdrawal',
        name: 'cashierTimeWithdrawal',
        component:()=>import('../views/Counter/cashier/TimeWithdrawalView.vue')
    },
    {
        path: '/counter/cashier/transferAccount',
        name: 'cashierTransferAccount',
        component:()=>import('../views/Counter/cashier/TransferAccountView.vue')
    }
];

// 创建并配置路由
const router = createRouter({
    history: createWebHistory(),
    routes,  // 等同于 routes: routes
});

export default router;