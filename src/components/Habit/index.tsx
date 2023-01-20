interface HabitDayProps {
  completed?: number
}

export const HabitDay = ({ completed }: HabitDayProps) => {
  return (
    <>
      <div className={'bg-zinc-800 w-10 h-10 text-white rounded-lg flex items-center justify-center border-2 border-zinc-700 '}>
        {completed}
      </div>
    </>
  )
}
