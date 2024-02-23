export default function matchNames(siteName) {
  const siteNames = {
    dashboard: 'Panel',
    help: 'Pomoc',
    messages: 'Wiadomości',
    orders: 'Zamówienia',
    settings: 'Ustawienia',
    tasks: 'Zadania',
    users: 'Użytkownicy',
    warehouse: 'Magazyn',
  }
  return siteNames[siteName]
}
