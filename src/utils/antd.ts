import { FormInstance, Form } from 'antd'
import { useEffect, useState } from 'react'

export type options = {
  validateFormInStart: boolean
}

const defaultOptions: options = {
  validateFormInStart: false,
}

export const useExtraAntdForm = (
  form: FormInstance,
  { validateFormInStart }: options = defaultOptions
) => {
  const [hasError, setHasError] = useState(true)

  const values = Form.useWatch([], form)

  const validateForm = async () => {
    try {
      const formValidation = await form.validateFields()
      setHasError(Object.keys(formValidation).length === 0)
    } catch {
      setHasError(true)
    }
  }

  useEffect(() => {
    validateFormInStart && validateForm()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    validateForm()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return {
    hasError,
  }
}
