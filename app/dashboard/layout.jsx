import SideMenu from './SideMenu'
import Topbar from './Topbar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="px-10 py-7">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
