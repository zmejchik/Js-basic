const textCSV = `48.30,32.16,Кропивницький,200000,
44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментаря `;
function parseSCV(textCSV) {
  const result = textCSV
    .split("\n")
    .filter((str) => str.trim()[0] !== "#" && str.trim() !== "")
    .map((arr) => {
      let arrSplitting = arr.split(",");
      return {
        x: `${arrSplitting[0]}`,
        y: `${arrSplitting[1]}`,
        name: `${arrSplitting[2]}`,
        population: `${arrSplitting[3]}`,
      };
    })
    .sort((a, b) => {
      return Number(b.population) - Number(a.population);
    })
    .slice(0, 10)
    .reduce((accumulator, currentValue, index) => {
      accumulator[currentValue.name] = {
        population: currentValue.population,
        rating: index + 1,
      };
      return accumulator;
    }, {});
  console.log(result);
  //lambda function
  return (textForReplace) => {
    const keys = Object.keys(result);
    keys.forEach((text) => {
      if (textForReplace.includes(text)) {
        let lastDigitInPopulation = Number(result[text].population.slice(-1));
        console.log(result[text]);
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
  }; //i will add lambda function
}

console.log(parseSCV(textCSV)("Вінниця це місто в якому я був"));
/* 
.reduce((accumulator, currentValue, index) => {
      return (
        accumulator +
        currentValue.name +
        ":{population:" +
        currentValue.population +
        ", rating:" +
        [index + 1] +
        "},"
      );
    }, "");
.reduce((accumulator, currentValue, index) => {
    let lastDigitInPopulation = Number(currentValue.population.slice(-1));
    return (
      accumulator +
      currentValue.name +
      "(" +
      [index + 1] +
      " місце в ТОП-10 найбільших міст України, населення " +
      currentValue.population +
      (lastDigitInPopulation >= 5 || lastDigitInPopulation === 0
        ? " людей"
        : lastDigitInPopulation >= 2
        ? " людини"
        : " людина") +
      "\n"
    );
  }, ""); */

/* Послідовність дій під час вирішення завдання:
розбити весь рядок на масив рядків за переходами на новий рядок (split). 
відфільтрувати невалідні рядки (filter) .filter(a => /[a-z]/.test(a))
зробити з рядків асоціативні масиви виду {x: 1, y: 1, name: "Kyiv", population: 1000000} (метод map). можна спочатку зробити цей пункт, а потім п.2, на ваш смак.
відсортувати міста за кількістю населення (sort)
вибрати ТОП-10 населених міст (slice)
сформувати з масиву об'єктів один об'єкт, яким будуть підставлятися рядки (reduce), наприклад
{
  Kyiv: {population: 1000000, rating: 1},
  Kharkiv: {population: 500000, rating: 2},
  …
}
зробити лямбда-функцію, яка підставлятиме правильні рядки з цього об'єкта (replace) і повернути її
 */
