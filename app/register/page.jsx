import { Button, Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

export default function Register() {
  return (
    <div className="h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvZyUyMG1vdW50YWlufGVufDB8fDB8fHww')] dark:bg-[url('https://wallpapersmug.com/download/1024x768/95afc8/dark-night-river-forest-minimal-art.jpg')]">
      <div className="grid grid-cols-1 grid-rows-[auto 1fr auto] gap-8 items-center h-full p-6 backdrop-blur-lg lg:w-1/2 lg:bg-opacity-80 dark:lg:bg-opacity-90 lg:bg-slate-100 dark:lg:bg-zinc-950">
        <div className="flex justify-between items-start h-full">
          <div className="sm:pl-10">
            <h1 className="text-xl font-semibold">Company Logo</h1>
          </div>
          <ThemeSwitcher />
        </div>

        <form className="w-80 sm:w-96 mx-auto grid gap-5">
          <h2 className="font-semibold text-2xl">Zarejestruj</h2>
          <p className="text-sm">
            Masz masz konto?
            <Link href={'/login'} className="text-primary ml-1">
              Zaloguj się
            </Link>
          </p>
          <Button radius="sm" className="bg-neutral-200 dark:bg-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              className="w-6 h-6">
              <path
                fill="#4285f4"
                d="M12.87999908 7.13331113c0-.49332777-.0400763-.85332837-.12666018-1.22665645H7.12000332v2.22664117h3.30664127c-.066603.55335156-.42664081 1.38668711-1.22665655 1.94665632l-.01121182.07452283 1.781156 1.37983931.12340638.01230915c1.13330234-1.04664784 1.78666048-2.5866559 1.78666048-4.41331233"></path>
              <path
                fill="#34a853"
                d="M7.1199995 12.99998274c1.61997706 0 2.97996124-.53335826 3.9733286-1.45332779l-1.89334397-1.46670278c-.506656.35333936-1.18667175.59999942-2.07998463.59999942-1.58665638 0-2.9333128-1.04663353-3.41335881-2.49329787l-.07036253.0059747-1.85207197 1.43333564-.02421753.06736635c.98665649 1.95998474 3.01332819 3.30668669 5.36001523 3.30668669"></path>
              <path
                fill="#fbbc05"
                d="M3.70664069 8.18665467c-.1266641-.37332817-.19996928-.7733588-.19996928-1.18667175 0-.41335838.07330146-.81334368.19330516-1.18667175l-.00335496-.07951328-1.87528168-1.45636157-.0613549.0291889c-.40664846.81334368-.63998411 1.7266948-.63998411 2.69335884 0 .96666415.23333565 1.87996937.63998507 2.69331295l1.94665651-1.5066412"></path>
              <path
                fill="#eb4335"
                d="M7.1199995 3.31996768c1.12664872 0 1.88663348.48666365 2.31998468.89335887l1.69332861-1.65334353C10.0933434 1.59331888 8.73997656.9999829 7.1199995.9999829c-2.34668704 0-4.37335884 1.34665643-5.36001523 3.30664108l1.9399924 1.5066871c.48670993-1.44666397 1.83336635-2.4933434 3.42002274-2.4933434"></path>
            </svg>
            Zarejestruj z Google
          </Button>

          <div className="relative flex justify-center items-center">
            <div className="w-full h-px bg-neutral-100 lg:bg-neutral-300 dark:bg-neutral-600 dark:lg:bg-neutral-800"></div>
            <span className="px-2 text-sm text-neutral-50 lg:text-neutral-600 dark:text-neutral-400">
              lub
            </span>
            <div className="w-full h-px bg-neutral-100 lg:bg-neutral-300 dark:bg-neutral-600 dark:lg:bg-neutral-800"></div>
          </div>

          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Wpisz swój email"
            labelPlacement="outside"
            radius="sm"
          />
          <Input
            isRequired
            type="password"
            label="Hasło"
            placeholder="Wpisz swoje hasło"
            labelPlacement="outside"
            radius="sm"
          />
          <Input
            isRequired
            type="password"
            label="Powtórz hasło"
            placeholder="Powtórz swoje hasło"
            labelPlacement="outside"
            radius="sm"
          />

          <Button type="submit" color="primary" className="mt-5 font-semibold">
            Zarejestruj
          </Button>
        </form>
        <p className="mt-auto text-center text-xs">&copy; Twoja firma 2024</p>
      </div>
    </div>
  )
}
