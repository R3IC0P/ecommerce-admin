import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Button as={Link} href={'/login'} variant="bordered">
        Zaloguj
      </Button>
      <Button as={Link} href={'/register'} variant="bordered">
        Zarejestruj
      </Button>
    </>
  )
}
