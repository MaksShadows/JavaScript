const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function studentsBirthDays(students) {
  const arrStudents = students.slice();
  const result = arrStudents
      .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
      .reduce((acc, { name, birthDate }) => {
          const month = MONTHS[new Date(birthDate).getMonth()];
          return {...acc, [month]: acc[month] ? acc[month].concat(name) : [name]};
      }, {});
  return result;
};

export { studentsBirthDays };
