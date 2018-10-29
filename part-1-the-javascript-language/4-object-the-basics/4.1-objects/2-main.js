let schedule = {};

const isEmpty = schedule => {
  return Object.keys(schedule).length === 0;
};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
