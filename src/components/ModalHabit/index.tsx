import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import { ReactElement } from 'react'

export interface ModalHabitProps {
  titleButton?: string
  contentModal: ReactElement
  titleModal: string
}

export const ModalHabit = ({
  titleButton,
  contentModal,
  titleModal,
}: ModalHabitProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type='button'
        className={
          'border border-orange-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-orange-300'
        }
      >
        <Plus size={20} className={'text-orange-500'} />
        {titleButton}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='w-secreen h-screen bg-black/80 fixed inset-0' />
        <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
            <X size={24} aria-label={'Fechar o modal'} />
          </Dialog.Close>
          <Dialog.Title className='text-3xl leading-tight font-extrabold'>
            {titleModal}
          </Dialog.Title>
          {contentModal}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
