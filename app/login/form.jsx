'use client'

import { Button, Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const emailIsInvalid = useMemo(() => {
    if (email === '') return false
    const isValidated = email.match(
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
    )
    return isValidated ? false : true
  }, [email])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result.error) {
      setError('Niepoprawny adres email lub hasło')
      return
    }

    router.push('dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="w-80 sm:w-96 mx-auto grid gap-5">
      <h2 className="font-semibold text-2xl">Zaloguj</h2>
      <p className="text-sm">
        Nie masz konta?
        <Link href={'/register'} className="text-primary ml-1">
          Zarejestruj się
        </Link>
      </p>
      <Button
        onClick={() => signIn('google')}
        radius="sm"
        className="bg-neutral-200 dark:bg-neutral-800">
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
        Zaloguj z Google
      </Button>

      <div className="relative flex justify-center items-center">
        <div className="w-full h-px bg-neutral-100 lg:bg-neutral-300 dark:bg-neutral-600 dark:lg:bg-neutral-800"></div>
        <span className="px-2 text-sm text-neutral-50 lg:text-neutral-600 dark:text-neutral-400">
          lub
        </span>
        <div className="w-full h-px bg-neutral-100 lg:bg-neutral-300 dark:bg-neutral-600 dark:lg:bg-neutral-800"></div>
      </div>

      <Input
        onValueChange={setEmail}
        value={email}
        isRequired
        name="email"
        type="email"
        label="Email"
        placeholder="Wpisz swój email"
        labelPlacement="outside"
        radius="sm"
        errorMessage={
          emailIsInvalid && 'Wprowadź poprawny adres email (np. nazwa@nazwa.pl)'
        }
      />
      <Input
        onValueChange={setPassword}
        value={password}
        isRequired
        name="password"
        type="password"
        label="Hasło"
        placeholder="Wpisz swoje hasło"
        labelPlacement="outside"
        radius="sm"
      />
      <div className="flex justify-between items-center">
        <Checkbox size="sm">Zapamiętaj mnie</Checkbox>
        <Link href={''} className="text-primary text-sm">
          Zapomniałeś hasła?
        </Link>
      </div>
      {error ? (
        <p className="p-3 rounded-md text-neutral-50 bg-danger">{error}</p>
      ) : (
        ''
      )}
      <Button type="submit" color="primary" className="mt-5 font-semibold">
        Zaloguj
      </Button>
    </form>
  )
}
