
export interface Challenge {
  id: number;
  destinationId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const challenges: Challenge[] = [
  {
    id: 1,
    destinationId: "taj-mahal",
    question: "Who commissioned the Taj Mahal?",
    options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
    correctAnswer: 1,
    explanation: "Shah Jahan commissioned the Taj Mahal."
  },
  {
    id: 2,
    destinationId: "taj-mahal",
    question: "In which city is the Taj Mahal located?",
    options: ["Delhi", "Agra", "Jaipur", "Mumbai"],
    correctAnswer: 1,
    explanation: "The Taj Mahal is located in Agra, Uttar Pradesh."
  },
  {
    id: 3,
    destinationId: "charminar",
    question: "Where is Charminar located?",
    options: ["Hyderabad", "Chennai", "Delhi", "Mysuru"],
    correctAnswer: 0,
    explanation: "Charminar is located in Hyderabad, Telangana."
  },
  {
    id: 4,
    destinationId: "charminar",
    question: "Who commissioned Charminar?",
    options: [
      "Akbar",
      "Shah Jahan",
      "Muhammad Quli Qutb Shah",
      "Ashoka"
    ],
    correctAnswer: 2,
    explanation: "Muhammad Quli Qutb Shah commissioned Charminar in 1591."
  },
  {
    id: 5,
    destinationId: "hampi",
    question: "Hampi was the capital of which empire?",
    options: ["Mughal", "Vijayanagara", "Maurya", "Gupta"],
    correctAnswer: 1,
    explanation: "Hampi was the capital of the Vijayanagara Empire."
  },
  {
    id: 6,
    destinationId: "konark",
    question: "The Konark Sun Temple is dedicated to which deity?",
    options: ["Shiva", "Vishnu", "Surya", "Ganesha"],
    correctAnswer: 2,
    explanation: "The Konark Sun Temple is dedicated to Surya."
  },
  {
    id: 7,
    destinationId: "golconda-fort",
    question: "Golconda Fort is located in which state?",
    options: ["Andhra Pradesh", "Telangana", "Kerala", "Tamil Nadu"],
    correctAnswer: 1,
    explanation: "Golconda Fort is located in Hyderabad, Telangana."
  },
  {
    id: 8,
    destinationId: "qutub-minar",
    question: "Qutub Minar is located in which city?",
    options: ["Agra", "Delhi", "Jaipur", "Lucknow"],
    correctAnswer: 1,
    explanation: "Qutub Minar is located in Delhi."
  }
];

export function getChallenges(destinationId?: string) {
  if (!destinationId || destinationId === "all") {
    return challenges;
  }

  return challenges.filter(
    (challenge) => challenge.destinationId === destinationId
  );
}
