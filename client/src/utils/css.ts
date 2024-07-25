const joinClassNames = (
  ...classes: (string | undefined | null | boolean)[]
) => {
  return classes
    .filter((classString) => Boolean(classString))
    .join(' ');
};

export { joinClassNames };
