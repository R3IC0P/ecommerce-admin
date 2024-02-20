'use client'

import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Dashboard() {
  const { data: session } = useSession()

  if (session) {
    return <>Zalogowano</>
  }

  redirect('/')
}
