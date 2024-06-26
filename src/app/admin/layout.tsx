import type { ReactNode } from 'react'

import Nav, { NavLink } from '@/components/Nav'

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href='/'>Dashboard</NavLink>
        <NavLink href='/admin/products'>Products</NavLink>
        <NavLink href='/admin/users'>Customers</NavLink>
        <NavLink href='/admin/orders'>Sales</NavLink>
      </Nav>
      <div className='container my-6'>
        {children}
      </div>
    </>
  )
}