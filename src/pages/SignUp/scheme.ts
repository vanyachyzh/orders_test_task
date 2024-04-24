import * as yup from 'yup';

export const validationScheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      'Uppercase + lowercase + number + special character (!@#$%^&*)',
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required('Confirm Password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return value === this.parent.password;
    }),
});
