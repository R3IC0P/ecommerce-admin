'use client'

import { Button, Chip, Input, Link } from '@nextui-org/react'
import NextLink from 'next/link'
import { useMemo, useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('')
  const [succes, setSucces] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const emailIsInvalid = useMemo(() => {
    if (email === '') return false
    const isValidated = email.match(
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
    )
    if (isValidated) {
      setError('')
      return false
    }
    return true
  }, [email])

  const passwordIsInvalid = useMemo(() => {
    if (password === '') return false
    const isValidated = password.match(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    )
    if (isValidated) {
      setError('')
      return false
    }
    return true
  }, [password])

  const password2IsInvalid = useMemo(() => {
    if (password2 === '') return false
    const isValidated = password2 === password
    if (isValidated) {
      setError('')
      return false
    }
    return true
  }, [password2, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (emailIsInvalid || passwordIsInvalid || password2IsInvalid) {
      setError('Wprowadź poprawne dane')
      return
    }

    setIsProcessing(true)

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    if (response.status === 500) {
      setError('Wystąpił nieoczekiwany błąd. Spróbuj ponownie')
    }

    if (response.status === 400) {
      setError('Konto o podanym adresie email już istnieje')
    }

    if (response.ok) {
      e.target.reset()
      setError('')
      setSucces(true)
    }
    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="w-80 sm:w-96 mx-auto grid gap-5">
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
        errorMessage={
          passwordIsInvalid &&
          'Hasło musi zawierać co najmniej 8 znaków, duże i małe litery, cyfry i znaki specjalne (np. *, &, $ itp.)'
        }
      />
      <Input
        onValueChange={setPassword2}
        value={password2}
        isRequired
        name="password2"
        type="password"
        label="Powtórz hasło"
        placeholder="Powtórz swoje hasło"
        labelPlacement="outside"
        radius="sm"
        errorMessage={password2IsInvalid && 'Hasła muszą być takie same'}
      />
      {error ? (
        <p className="p-3 rounded-md text-neutral-50 bg-danger">{error}</p>
      ) : (
        ''
      )}
      {succes ? (
        <p className="p-3 rounded-md bg-success dark:bg-success-300">
          Zarejestrowano pomyślnie. Możesz się teraz{' '}
          <Link
            as={NextLink}
            href={'/login'}
            underline="always"
            className="text-current font-semibold">
            zalogować
          </Link>
        </p>
      ) : (
        ''
      )}
      <Button
        type="submit"
        color="primary"
        className="mt-5 font-semibold"
        isLoading={isProcessing}>
        Zarejestruj
      </Button>
    </form>
  )
}
