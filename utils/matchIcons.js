import {
  MdChat,
  MdDashboard,
  MdHelp,
  MdOutlineShoppingCart,
  MdPerson,
  MdSettings,
  MdTask,
  MdWarehouse,
} from 'react-icons/md'

export default function mathcIcons(siteName) {
  const siteIcons = {
    dashboard: <MdDashboard />,
    help: <MdHelp />,
    messages: <MdChat />,
    orders: <MdOutlineShoppingCart />,
    settings: <MdSettings />,
    tasks: <MdTask />,
    users: <MdPerson />,
    warehouse: <MdWarehouse />,
  }
  return siteIcons[siteName]
}
