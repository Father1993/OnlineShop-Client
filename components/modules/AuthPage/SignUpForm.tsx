import { useState } from 'react'
import { IInputs } from '@/types/auth'
import NameInput from '@/components/elements/AuthPage/NameInput'
import { useForm } from 'react-hook-form'
import EmailInput from '@/components/elements/AuthPage/EmailInput'
import PasswordInput from '@/components/elements/AuthPage/PasswordInput'
import { signUpFx } from '@/app/api/auth'
import { showAuthError } from '@/utils/errors'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/auth/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'

const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const [spinner, setSpinner] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      const userData = await signUpFx({
        url: '/users/signup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('name')
      resetField('password')
      switchForm()
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form
      className={`${styles.form} ${darkModeClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>
        Создать аккаунт
      </h2>

      <NameInput register={register} errors={errors} />

      <EmailInput register={register} errors={errors} />

      <PasswordInput register={register} errors={errors} />

      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
      >
        {spinner ? (
          <div className={spinnerStyles.spinner} />
        ) : (
          'Зарегистрироваться'
        )}
      </button>
    </form>
  )
}

export default SignUpForm
