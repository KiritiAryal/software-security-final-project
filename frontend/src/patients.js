import { medications } from "./medications";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("/");
}

const resultDate = [
  formatDate(
    randomDate(
      new Date(new Date()),
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date()),
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date()),
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date()),
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    )
  ),
];

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const testDate = [
  formatDate(
    randomDate(
      new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
    )
  ),
  formatDate(
    randomDate(
      new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
    )
  ),
];
function myFunction(item, index) {
  item;
}
const patients = [
  {
    id: 1,
    testDate: `${testDate[0]}`,
    availableDate: `${resultDate[0]}`,
    testResult: "All tests came back good!",
    medication: `${medications[0]}`,
    medicationDescription: "For Pain Relief, Generic",
  },
  {
    id: 2,
    testDate: `${testDate[1]}`,
    availableDate: `${resultDate[1]}`,
    testResult: "Your teeth are in good health!",
    medication: `${medications[1]}`,
    medicationDescription: "For High Blood Pressure, Generic",
  },
  {
    id: 3,
    testDate: `${testDate[2]}`,
    availableDate: `${resultDate[2]}`,
    testResult: "The medication is working as expected!",
    medication: `${medications[2]}`,
    medicationDescription: "For Cholesterol, Generic",
  },
  {
    id: 4,
    testDate: `${testDate[3]}`,
    availableDate: `${resultDate[3]}`,
    testResult: "The fractures are healing in a good pace.",
    medication: `${medications[3]}`,
    medicationDescription: "For Asthma, GSK",
  },
];
export default patients;
