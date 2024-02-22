import { auth } from '@/auth'
import Topbar from './Topbar'
import SideBar from './SideBar'

export default async function DashboardLayout({ children }) {
  const session = await auth()
  const userData = {
    name: session.user.name,
    position: session.user.position,
    image: session.user.image,
  }

  return (
    <div className="grid grid-cols-[auto_1fr] h-full">
      <SideBar userData={userData} />
      <div className="px-10 py-7">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
