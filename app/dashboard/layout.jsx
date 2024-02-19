import SideMenu from './SideMenu'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="p-10">
        <main>{children}</main>
      </div>
    </div>
  )
}
