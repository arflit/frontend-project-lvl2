const msInDay = 86400000;
const msInYear = 31556952000;
const daysInYear = 365.2425;

class Person {
  constructor(date) {
    this.birthDate = new Date(date);
  }

  getAgeInDays() {
    const now = new Date(Date.now());
    return (now - this.birthDate) / msInDay;
  }

  getMathFullYears() {
    const now = new Date(Date.now());
    return Math.floor((now - this.birthDate) / msInYear);
  }

  getUsuallyFullYears() {
    const now = new Date(Date.now());
    const birthYear = this.birthDate.getFullYear();
    const birthMonth = this.birthDate.getMonth();
    const birthDay = this.birthDate.getDate();
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth();
    const todayDay = now.getDate();
    let vasBirthdayInThisYear = false;
    if (todayMonth > birthMonth) {
      vasBirthdayInThisYear = true;
    }
    if (todayMonth === birthMonth && todayDay >= birthDay) {
      vasBirthdayInThisYear = true;
    }
    return vasBirthdayInThisYear
      ? todayYear - birthYear
      : todayYear - birthYear - 1;
  }
}

const ShapirsChildrensBirthdays = [
  '1992-10-21',
  '1995-10-27',
  '2000-12-18',
  '2003-01-10',
  '2005-03-21',
  '2011-08-01',
];

const ShapirasChildren = ShapirsChildrensBirthdays.map(
  (day) => new Person(day),
);

const ShapirasChildrensFullYearSum = ShapirasChildren.reduce(
  (sum, child) => sum + child.getUsuallyFullYears(),
  0,
);
const ShapirasChildrensDaysSum = ShapirasChildren.reduce(
  (sum, child) => sum + child.getAgeInDays(),
  0,
);

console.log(`Usually full years: ${ShapirasChildrensFullYearSum},
years where we count days of life: ${ShapirasChildrensDaysSum / daysInYear},
days of life: ${Math.floor(ShapirasChildrensDaysSum)}`);
