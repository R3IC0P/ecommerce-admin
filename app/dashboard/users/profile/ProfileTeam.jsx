import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

export default function ProfileTeam() {
  return (
    <Card
      shadow="none"
      isFooterBlurred
      className="max-w-5xl mr-auto p-3 rounded-md border border-neutral-300 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <CardHeader>
        <div className="flex flex-col">
          <h3 className="text-2xl">Zepsół</h3>
          <p className="text-sm text-neutral-500">
            Sprawdź i dostosuj informacje zespołu do którego należysz.
          </p>
        </div>
      </CardHeader>
      <Divider className="my-3" />
      <CardBody>
        <p>Nie należysz do żadnego zespołu {':('}</p>
      </CardBody>
    </Card>
  )
}
