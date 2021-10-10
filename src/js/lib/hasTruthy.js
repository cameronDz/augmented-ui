const hasTruthy = (...args) => {
  let isTruthy = false;
  const count = Array.isArray(args) ? args.length : 0;
  for (let idx = 0; idx < count; idx++) {
    if (args[idx]) {
      isTruthy = true;
      break;
    }
  }
  return isTruthy;
};

export { hasTruthy };
