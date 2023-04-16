export const validate = (fields) => {
  const { name, email, textarea } = fields;
  let errors = {};

  if (!name.trim()) {
    errors.name = "fieldRequired";
  }
  if (!email.trim()) {
    errors.email = "fieldRequired";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "validEmail";
  }
  if (!textarea.trim()) {
    errors.textarea = "fieldRequired";
  }
  return errors;
};
