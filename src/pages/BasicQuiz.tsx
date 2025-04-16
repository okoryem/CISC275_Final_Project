export function BasicQuiz() {

  const questions = [
    {
      question: "What do you like doing the most?",
      options: [
        "Solving problems",
        "Helping others",
        "Organizing things",
        "Creating new things"
      ]
    },
    {
      question: "What kind of work environment do you prefer?",
      options: [
        "Busy and fast-paced",
        "Calm and steady",
        "Collaborative with teams",
        "Independent and quiet"
      ]
    },
    {
      question: "Do you enjoy working with people?",
      options: [
        "Yes, I enjoy it a lot",
        "Sometimes, but I like a balance",
        "Not really, I prefer working alone",
        "No, I prefer to avoid social interactions"
      ]
    },
    {
      question: "How do you feel about taking on leadership roles?",
      options: [
        "I love leading others and taking charge",
        "I’m okay with it, but I prefer sharing the responsibility",
        "I’m comfortable, but I prefer someone else to lead",
        "I don’t want to take on leadership roles"
      ]
    },
    {
      question: "How important is it for you to have job security?",
      options: [
        "Very important",
        "Important, but I can be flexible",
        "Not that important",
        "Not important at all"
      ]
    },
    {
      question: "What’s your preferred working style?",
      options: [
        "Flexible with tasks and deadlines",
        "Structured with clear goals and deadlines",
        "Collaborative with input from others",
        "Independent with minimal supervision"
      ]
    },
    {
      question: "What type of work do you enjoy the most?",
      options: [
        "Work that challenges my problem-solving skills",
        "Helping others and making a difference",
        "Organizing and managing tasks",
        "Using my creativity and thinking outside the box"
      ]
    },
    {
      question: "How do you feel about routine tasks?",
      options: [
        "I enjoy having a consistent routine; it helps me stay organized.",
        "I like some routine, but I need variety to stay engaged.",
        "I prefer to avoid routine tasks and keep things dynamic.",
        "I dislike routine tasks and thrive on constant change."
      ]
    },
    {
      question: "How do you approach learning new skills or concepts?",
      options: [
        "I love learning and actively seek out opportunities to gain new skills.",
        "I’m open to learning but prefer structured environments for it.",
        "I learn best through experience rather than formal training.",
        "I’m not particularly motivated to learn new things unless absolutely necessary."
      ]
    },
    {
      question: "What kind of impact do you want to have in your career?",
      options: [
        "I want to make a meaningful, long-lasting impact on the world.",
        "I want to contribute to a company’s success and grow personally.",
        "I want to be recognized for my individual accomplishments and expertise.",
        "I’m more interested in stability and just doing a job well."
      ]
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Basic Career Quiz</h2>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "25px" }}>
          <p><strong>{index + 1}. {q.question}</strong></p>
          {q.options.map((option, i) => (
            <button key={i} style={{ marginRight: "10px", marginTop: "5px" }}>
              {String.fromCharCode(97 + i)} {option}

            </button>
          ))}
        </div>
      ))}
    </div>
  );
}


  return <h2>Welcome to the Basic Quiz</h2>;
}
