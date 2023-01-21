interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const progressStyle = {
    width: `${progress}%`,
  }
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div
        className='h-3 rounded-xl bg-orange-600 w-3/4'
        style={progressStyle}
        role='progressbar'
        aria-label='Progresso completado nesse dia'
        aria-valuenow={progress}
      />
    </div>
  )
}
