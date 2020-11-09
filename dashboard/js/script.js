// const resetPassword = document.querySelector('#reset_password')
const oldPassword = document.querySelector('#old-Password')
const newPassword = document.querySelector('#new-Password')
const confirmPassword = document.querySelector('#confirm-Password')
const btnLoarder = document.querySelector('.core-btn')

// Global Functions
// =================================
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-group error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-group success'
}

const newLoader = (text) => {
  const btn = btnLoarder
  btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"><span class="sr-only">Loading...</span></span> <span class="sending">${text}</span>`
}
const oldLoader = (text) => {
  const btn = btnLoarder
  btn.innerHTML = text
}
// =====================================

// Reset Password Functions
document.querySelector('#reset_password').addEventListener('submit', (e) => {
  e.preventDefault()

  const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`)
      } else {
        showSuccess(input)
        newLoader('Reseting...')
        setTimeout(() => {
          oldLoader('Reset')
        }, 2000)
      }
    })
  }

  const checkPasswordLength = (input, min) => {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      )
    } else {
      showSuccess(input)
    }
  }

  const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
      showError(input2, `Password do not match`)
    }
  }
  // Get Field Name
  const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
  }

    checkRequired([oldPassword, newPassword, confirmPassword]),
    checkPasswordMatch(newPassword, confirmPassword),
    checkPasswordLength(newPassword, 6)
})


