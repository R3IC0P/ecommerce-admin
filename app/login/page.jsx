import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import Form from './form'

export default function Login() {
  return (
    <div className="h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvZyUyMG1vdW50YWlufGVufDB8fDB8fHww')] dark:bg-[url('https://wallpapersmug.com/download/1024x768/95afc8/dark-night-river-forest-minimal-art.jpg')]">
      <div className="grid grid-cols-1 grid-rows-[auto 1fr auto] gap-8 items-center h-full p-6 backdrop-blur-lg lg:w-1/2 lg:bg-opacity-80 dark:lg:bg-opacity-90 lg:bg-slate-100 dark:lg:bg-zinc-950">
        <div className="flex justify-between items-start h-full">
          <div className="sm:pl-10">
            <h1 className="text-xl font-semibold">Company Logo</h1>
          </div>
          <ThemeSwitcher />
        </div>
        <Form />
        <p className="mt-auto text-center text-xs">&copy; Twoja firma 2024</p>
      </div>
    </div>
  )
}
