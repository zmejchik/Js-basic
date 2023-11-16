// The CSV data containing city coordinates, names, and populations
const textCSV = `48.30,32.16,Кропивницький,200000,
                44.38,34.33,Алушта,31440,
                49.46,30.17,Біла Церква,200131,
                49.54,28.49,Бердичів,87575,#некоммент
                #
                46.49,36.58,#Бердянськ,121692,
                49.15,28.41,Вінниця,356665,
                #45.40,34.29,Джанкой,43343,
                50.5,30.5,Київ,3000000,

                # в цьому файлі три рядки-коментаря `;

function parseSCV(textCSV) {
  // Extracting and processing data from CSV
  let result = textCSV
    .split("\n") //Splitting a line into an array of lines by transitions to a new line
    .filter((str) => str.trim()[0] !== "#" && str.trim() !== "") // Filtering out lines that are comments or empty
    .map((arr) => {
      let arrSplitting = arr.split(",");
      return {
        x: `${arrSplitting[0]}`,
        y: `${arrSplitting[1]}`,
        name: `${arrSplitting[2].replace("#", "")}`,
        population: `${arrSplitting[3]}`,
      };
    }) // Mapping each line to an object with city details
    .sort((a, b) => {
      return Number(b.population) - Number(a.population);
    }) // Sorting cities by population in descending order
    .slice(0, 10) // Selecting the top 10 populated cities
    .reduce((accumulator, currentValue, index) => {
      accumulator[currentValue.name] = {
        population: currentValue.population,
        rating: index + 1,
      }; // Converting the array to an object with city names as keys and their details as values
      return accumulator;
    }, {});

  // Returning a lambda function that replaces text with city details
  // Example returned: Kyiv (1 place in the TOP-10 largest cities in Ukraine, population 1000000 people)
  return (textForReplace) => {
    const keys = Object.keys(result);
    keys.forEach((text) => {
      if (textForReplace.includes(text)) {
        let lastDigitInPopulation = Number(result[text].population.slice(-1));
        textForReplace = textForReplace.replace(
          text,
          text +
            " (" +
            result[text].rating +
            " місце в ТОП-10 найбільших міст України, населення " +
            result[text].population +
            (lastDigitInPopulation >= 5 || lastDigitInPopulation === 0
              ? " людей) "
              : lastDigitInPopulation >= 2
              ? " людини) "
              : " людина) ")
        );
      }
    });
    return textForReplace;
  }; 
}

let dataCities = parseSCV(textCSV);
console.log(dataCities("Вінниця це місто в якому я був"));
console.log(dataCities("Столицею України є місто Київ"));
console.log(dataCities("Столицею Німеччини є місто Берлін"));
