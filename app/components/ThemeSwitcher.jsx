'use client'

import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdOutlineWbSunny, MdOutlineNightlight } from 'react-icons/md'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(theme === 'dark' ? true : false)
  }, [theme])

  const handleChange = () => {
    setIsSelected(theme === 'dark' ? false : true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={handleChange}
        size="sm"
        color="secondary"
        thumbIcon={isSelected ? <MdOutlineWbSunny /> : <MdOutlineNightlight />}
      />
    </div>
  )
}
