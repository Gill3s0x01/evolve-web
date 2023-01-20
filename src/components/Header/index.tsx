import logoImage from '../../assets/logo.svg'
import { Plus } from 'phosphor-react'

export const Header = () => {
  return (
    <div
      className={'w-full max-w-3xl mx-auto flex items-center justify-between'}
    >
      <img src={logoImage} alt='logo' />
      <button
        type='button'
        className={
          'border border-orange-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-orange-300'
        }
      >
        <Plus size={20} className={'text-orange-500'} />
        Novo Hábito
      </button>
    </div>
  )
}