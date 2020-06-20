import md5 from 'md5'; //crea un hash apartir de tu correo electronico

export const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formatteEmail = email.trim().toLowerCase();
  const hash = md5(formatteEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};
