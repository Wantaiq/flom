const joinClassNames = (
  ...classes: (string | undefined | null | boolean)[]
) => {
  return classes
    .filter((classString) => Boolean(classString))
    .join(' ');
};

const concatinateClasses = (
  element: string,
  variation: string,
) => {
  return `${element}${variation.charAt(0).toUpperCase() + variation.slice(1)}`;
};

export { joinClassNames, concatinateClasses };
