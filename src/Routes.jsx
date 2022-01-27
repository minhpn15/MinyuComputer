import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Layput
const MainLayout = lazy(() => import('@/components/layouts/main'))

// Home
const Home = lazy(() => import('@/modules/home/Home'))

// Account
const Account = lazy(() => import('@/modules/account/'))
const Login = lazy(() => import('@/modules/account/pages/Login'))
const Register = lazy(() => import('@/modules/account/pages/Register'))
const ForgotPassword = lazy(() =>
  import('@/modules/account/pages/ForgotPassword')
)
const ResetPassword = lazy(() =>
  import('@/modules/account/pages/ResetPassword')
)
const Profile = lazy(() => import('@/modules/account/pages/Profile'))
const Cart = lazy(() => import('@/modules/cart'))

// Product
const Product = lazy(() => import('@/modules/product'))
const ProductList = lazy(() => import('@/modules/product/pages/List'))
const ProductDetail = lazy(() => import('@/modules/product/pages/Detail'))

// other
const NotFound = lazy(() => import('@/components/NotFound'))

const appRoutes = [
  {
    path: '/',
    name: 'Layout',
    element: MainLayout,
    children: [
      {
        index: true,
        name: 'Trang chủ',
        element: Home
      },
      {
        path: 'account',
        name: 'Tài khoản',
        element: Account,
        children: [
          {
            path: 'login',
            name: 'Đăng nhập',
            element: Login
          },
          {
            path: 'register',
            name: 'Đăng kí',
            element: Register
          },
          {
            path: 'forgot-password',
            name: 'Quên mật khẩu',
            element: ForgotPassword
          },
          {
            path: 'reset-password',
            name: 'Khôi phục mật khẩu',
            element: ResetPassword
          },
          {
            path: 'profile',
            name: 'Tài khoản',
            element: Profile
          }
        ]
      },
      {
        path: 'product',
        name: 'Sản phẩm',
        element: Product,
        children: [
          {
            index: true,
            name: 'Sản phẩm',
            element: ProductList
          },
          {
            path: ':id',
            name: 'Chi tiết sản phẩm',
            element: ProductDetail
          },
          { path: '*', element: NotFound }
        ]
      },
      { path: 'cart', name: 'Giỏ hàng', element: Cart },
      { path: '*', element: NotFound }
    ]
  }
]

const RouteWithFallback = ({ element: Element, ...props }) => (
  <Suspense fallback={<>...</>}>
    <Element {...props} />
  </Suspense>
)

const renderRoute = routes => {
  if (routes?.length === 0) return null
  return routes
    .map(({ path, children, index = false, ...props }, keyIndex) => {
      if (children) {
        return (
          <Route
            key={`${path}-${keyIndex}`}
            path={path}
            index={index}
            element={<RouteWithFallback {...props} />}
          >
            {renderRoute(children)}
          </Route>
        )
      }
      return (
        <Route
          key={`${path}-${keyIndex}`}
          path={path}
          index={index}
          element={<RouteWithFallback {...props} />}
        />
      )
    })
    .filter(v => v)
}

const AppRoutes = () => {
  return <Routes>{renderRoute(appRoutes)}</Routes>
}

export default AppRoutes
