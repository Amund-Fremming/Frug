const VALID_INPUT_REGEX = /^[A-Za-z0-9,.;:!?øæåØÆÅ\/\-\s]+$/;

const validateInput = (input: string) => {
  return VALID_INPUT_REGEX.test(input);
};

export { validateInput };
