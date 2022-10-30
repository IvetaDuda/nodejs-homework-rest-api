const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: 'confirmation of registration',
    html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Press to confirm</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
