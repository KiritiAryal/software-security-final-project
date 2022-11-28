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
const testDate = formatDate(
  new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
);
const collectedDate = formatDate(new Date());

const patients = [
  {
    id: 1,
    topic: "general",
    issue: "headache",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Hydrocodone-Acetaminophen",
    medicationDescrption: "For Pain Relief, Generic",
  },
  {
    id: 2,
    topic: "emergency",
    issue: "very hard",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Hydrochlorothiazide",
    medicationDescrption: "For High Blood Pressure, Generic",
  },
  {
    id: 3,
    topic: "general",
    issue: "headache",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Atorvastatin Calcium",
    medicationDescrption: "For Cholesterol, Generic",
  },
  {
    id: 4,
    topic: "general",
    issue: "headache",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Ventolin",
    medicationDescrption: "For Asthma, GSK",
  },
  {
    id: 5,
    topic: "emergency",
    issue: "very hard",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "	Metformin Hydrochloride",
    medicationDescrption: "For Diabetes, Generic",
  },
  {
    id: 6,
    topic: "general",
    issue: "headache",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "	Amoxicillin",
    medicationDescrption: "For Bacterial Infections, Generic",
  },
  {
    id: 7,
    topic: "emergency",
    issue: "very hard",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Gabapentin",
    medicationDescrption: "Seizures/Neuralgia, Generic",
  },
  {
    id: 8,
    topic: "emergency",
    issue: "very hard",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Ondansetron",
    medicationDescrption: "For Nausea/Vomiting, Generic",
  },
  {
    id: 9,
    topic: "optimetric",
    issue: "vary good",
    physician: "Dr. Woongla Boongla",
    testDate: `${testDate}`,
    availableDate: `${collectedDate}`,
    testResult: "Dont worry you're fine!",
    medication: "Xanax",
    medicationDescrption: "For Anxiety Disorders and Panic Disorder, Generic",
  },
];
export default patients;
