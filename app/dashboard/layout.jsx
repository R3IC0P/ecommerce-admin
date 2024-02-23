import { auth } from '@/auth'
import Topbar from './Topbar'
import SideBar from './Sidebar'

export default async function DashboardLayout({ children }) {
  const session = await auth()
  const userData = {
    name: session.user.name,
    position: session.user.position,
    image: session.user.image,
  }

  return (
    <div className="grid lg:grid-cols-[auto_1fr] h-full">
      <SideBar userData={userData} />
      <div>
        <div className="h-10 border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 lg:hidden"></div>
        <div className="px-10 py-7">
          <Topbar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
