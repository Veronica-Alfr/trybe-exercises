const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const mothsOfYear = ({winter, spring, summer, autumn}) => 
  yearSeasons.winter.splice(1, 3).concat([ ...spring, ...summer, ...autumn, winter[0]])
  console.log(mothsOfYear(yearSeasons))