import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from '../ProgressBar'
import dayjs from 'dayjs'
import { HabitsList } from '../HabitsList'

interface HabitDayProps {
  date: Date
  completed?: number
  amount?: number
}

export const HabitDay = ({
  completed = 0,
  amount = 0,
  date,
}: HabitDayProps) => {
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div
          className={clsx(
            'w-10 h-10 rounded-lg flex items-center justify-center border-2 ',
            {
              'bg-zinc-800  border-zinc-700': completedPercentage === 0,
              'bg-orange-900 border-orange-700':
                completedPercentage > 0 && completedPercentage < 20,
              'bg-orange-800 border-orange-500':
                completedPercentage >= 20 && completedPercentage < 40,
              'bg-orange-700 border-orange-500':
                completedPercentage >= 40 && completedPercentage < 60,
              'bg-orange-600 border-orange-500':
                completedPercentage >= 60 && completedPercentage < 80,
              'bg-orange-500 border-orange-400': completedPercentage >= 80,
            }
          )}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <HabitsList date={date} />

          <Popover.Arrow className='fill-zinc-900' height={10} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
