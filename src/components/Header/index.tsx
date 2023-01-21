import logoImage from '../../assets/logo.svg'
import { ModalHabit } from '../ModalHabit'
import { NewHabitForm } from '../NewHabitForm'

export const Header = () => {
  const renderContentModal = () => {
    return <NewHabitForm />
  }
  return (
    <div
      className={'w-full max-w-3xl mx-auto flex items-center justify-between'}
    >
      <img src={logoImage} alt='logo' />
      <ModalHabit
        titleButton={'Novo Hábito'}
        contentModal={renderContentModal()}
        titleModal={'Criar hábito'}
      />
    </div>
  )
}
