'use client'

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Skeleton,
} from '@nextui-org/react'
import { useState } from 'react'

export default function ProfileSettings() {
  const [isLoaded, setIsLoaded] = useState(true)

  return (
    <Card
      shadow="none"
      className="max-w-5xl mr-auto p-3 rounded-md border border-neutral-300 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <CardHeader>
        <div className="flex flex-col">
          <h3 className="text-2xl">Informacje</h3>
          <p className="text-sm text-neutral-500">Dostosuj swoje informacje.</p>
        </div>
      </CardHeader>
      <Divider className="my-3" />
      <CardBody>
        <div className="grid grid-cols-[auto_1fr] gap-7">
          <Skeleton isLoaded={isLoaded} className="w-40 h-40 rounded-full">
            <Avatar className="w-40 h-40 text-3xl" />
          </Skeleton>
          <div className="grid grid-cols-2 grid-rows-4 gap-5">
            <Input
              label="Nazwa użytkownika"
              labelPlacement="outside"
              placeholder="Nazwa użytkownika"
              radius="sm"
              className="col-span-2 max-w-96"
            />
            <Input
              label="Imię"
              labelPlacement="outside"
              placeholder="Imię"
              radius="sm"
            />
            <Input
              label="Nazwisko"
              labelPlacement="outside"
              placeholder="Nazwisko"
              radius="sm"
            />
            <Input
              label="Rola"
              labelPlacement="outside"
              placeholder="np. Pracownik"
              radius="sm"
            />
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Email"
              radius="sm"
            />
            <Input
              label="Kraj"
              labelPlacement="outside"
              placeholder="Polska"
              radius="sm"
            />
          </div>
        </div>
      </CardBody>
      <Divider className="my-3" />
      <CardFooter>
        <Button className="ml-auto mr-3">Anuluj</Button>
        <Button color="primary">Zapisz</Button>
      </CardFooter>
    </Card>
  )
}
