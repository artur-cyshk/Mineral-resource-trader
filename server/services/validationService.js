exports.registrationValidation = (user) => {
    return !(
        !user ||
        !user.username ||
        !user.email ||
        user.username.length < 3 ||
        user.password.length < 7 ||
        user.passwordConfirm.length < 7 ||
        user.password !== user.passwordConfirm
    );
};