export const formatSalary = (salary) => {
  if (!salary) {
    return "0";
  }
  if (salary >= 1000000) {
    return salary / 1000000 + "M";
  } else if (salary >= 1000) {
    return salary / 1000 + "K";
  } else {
    return salary;
  }
};
