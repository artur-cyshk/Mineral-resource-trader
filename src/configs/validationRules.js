import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';

Object.assign(Validation.rules, {
    lengthMoreThenThree: {
        rule: value => validator.isLength(value, {min: 3, max: 20}),
        hint: value => <span className='form-error is-visible'>Length must be between 3 and 20.</span>
    },
    lengthMoreThenSeven: {
        rule: value => validator.isLength(value, {min: 7, max: 50}),
        hint: value => <span className='form-error is-visible'>Length must be between 7 and 50.</span>
    },
    required: {
        rule: value => value.toString().trim(),
        hint: value => <span className='form-error is-visible'>Field is required</span>
    },
    email: {
        rule: value => validator.isEmail(value),
        hint: value => <span className='form-error is-visible'>Value isn`t an Email.</span>
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password && passwordConfirm && password.isUsed && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
            if (!isBothUsed || !isBothChanged) {
                return true;
            }
            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    }
});