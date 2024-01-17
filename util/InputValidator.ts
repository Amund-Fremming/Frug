const VALID_INPUT_REGEX = /^[A-Za-z0-9,.;:!?\\-\s]+$/;

const validateInput = (input: string) => {
  return VALID_INPUT_REGEX.test(input);
};

export { validateInput };
