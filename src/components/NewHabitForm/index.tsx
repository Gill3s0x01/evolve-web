import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'
import { api } from '../../lib/axios'

const avaliableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export const NewHabitForm = () => {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  async function createNewHabit(event: FormEvent) {
    event.preventDefault()
    if (weekDays.length === 0 || !title) {
      return alert('OPS!!! Há campos vazio')
    }
    await api.post('habits', {
      title,
      weekDays,
    })
    setTitle('')
    setWeekDays([])
    alert('Habito criado com sucesso')
  }

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay)
      setWeekDays(weekDaysWithRemovedOne)
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddOne)
    }
  }

  return (
    <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
      <label htmlFor='title' className='font-semibold leading-tight'>
        Qual seu comprometimento
      </label>
      <input
        type='text'
        id='title'
        placeholder='Exemplo: Exercícios todos os dias, etc...'
        autoFocus
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-500'
      />
      <label htmlFor='' className='font-semibold leading-tight mt-4'>
        Qual a recorrência?
      </label>
      <div className='mt-3 flex flex-col gap-2'>
        {avaliableWeekDays.map((weekDay, i) => {
          return (
            <Checkbox.Root
              key={weekDay}
              className='flex items-center gap-3 group'
              checked={weekDays.includes(i)}
              onCheckedChange={() => handleToggleWeekDay(i)}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className=' text-white leading-tigh'>{weekDay}</span>
            </Checkbox.Root>
          )
        })}
      </div>
      <button
        type='submit'
        className='mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500  '
      >
        <Check size={25} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}
