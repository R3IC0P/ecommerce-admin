import { auth } from '@/auth'
import SideMenu from './SideMenu'
import Topbar from './Topbar'

export default async function DashboardLayout({ children }) {
  const session = await auth()
  const userData = {
    name: session.user.name,
    position: session.user.position,
    image: session.user.image,
  }

  return (
    <div className="flex h-full">
      <SideMenu userData={userData} />
      <div className="px-10 py-7">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
