export function DetailedQuiz() {
  const questions = [
    {
      question: "What type of work environment do you prefer?",
      options: [
        "A fast-paced, dynamic environment with a lot of change and unpredictability",
        "A structured, stable environment with clear roles and tasks",
        "A collaborative environment with teamwork and group projects",
        "A solitary work environment where I can focus on tasks independently"
      ]
    },
    {
      question: "How do you feel about problem-solving at work?",
      options: [
        "I enjoy solving complex problems and finding creative solutions",
        "I prefer to work with structured problems that have clear solutions",
        "I like to brainstorm with others and solve problems as a team",
        "I prefer to follow instructions and avoid problem-solving"
      ]
    },
    {
      question: "How do you prefer to communicate at work?",
      options: [
        "Face-to-face, having in-depth conversations with colleagues",
        "Email or written communication for clarity",
        "A mix of both in-person and online communication",
        "I prefer to communicate less frequently and more formally"
      ]
    },
    {
      question: "Which of these best describes your ideal level of job responsibility?",
      options: [
        "I want to lead projects and have high decision-making authority",
        "I prefer to follow directions and contribute as a team member",
        "I like balancing leadership with collaboration, guiding teams when necessary",
        "I prefer to have minimal responsibilities and follow set guidelines"
      ]
    },
    {
      question: "How important is job security to you?",
      options: [
        "Very important – I want a job that provides stability and long-term security",
        "Important – I prefer a stable job but am open to some change",
        "Not very important – I’m open to taking risks and pursuing new opportunities",
        "Not important at all – I like exploring different jobs and career paths"
      ]
    },
    {
      question: "How do you feel about working under pressure?",
      options: [
        "I thrive under pressure and enjoy challenges",
        "I can manage pressure but prefer to work at a steady pace",
        "I prefer to avoid pressure and prefer calm, predictable work",
        "I find pressure stressful and try to minimize high-stress situations"
      ]
    },
    {
      question: "Which of the following interests you the most?",
      options: [
        "Technology and innovation",
        "Helping others and making a positive impact",
        "Organizing and managing resources efficiently",
        "Creativity and artistic expression"
      ]
    },
    {
      question: "If you could choose your ideal work schedule, which would you prefer?",
      options: [
        "Flexible hours that allow me to work when I feel most productive",
        "A regular 9-5 schedule for consistency and routine",
        "A schedule that includes some remote work and some office work",
        "Irregular hours, with some flexibility based on the project needs"
      ]
    },
    {
      question: "How do you feel about working in a team versus working alone?",
      options: [
        "I love working in a team and collaborating with others",
        "I prefer working alone with minimal interaction from others",
        "I like a balance of both, working independently but collaborating when needed",
        "I enjoy working with a small group of people but not large teams"
      ]
    },
    {
      question: "When it comes to career growth, which statement fits you best?",
      options: [
        "I want a career that offers lots of room for growth and advancement",
        "I’m comfortable in my current role and don’t need much advancement",
        "I want a career with opportunities for both growth and work-life balance",
        "I prefer stability and don’t need a lot of room for career advancement"
      ]
    },
    {
      question: "I enjoy tasks that require attention to detail.",
      options: [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ]
    },
    {
      question: "I feel more satisfied when my work directly impacts other people's lives.",
      options: [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ]
    },
    {
      question: "I prefer working in a field that allows me to use my creativity.",
      options: [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ]
    },
    {
      question: "I am open to working with new technologies and learning new software.",
      options: [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ]
    },
    {
      question: "True or False: I prefer jobs that involve repetitive tasks.",
      options: [
        "True",
        "False"
      ]
    },
    {
      question: "I prefer jobs that involve a lot of interaction with people.",
      options: [
        "True",
        "False"
      ]
    },
    {
      question: "On a scale from 1 to 5, how comfortable are you with managing others in a professional setting?",
      options: [
        "1 – Not comfortable",
        "2",
        "3",
        "4",
        "5 – Very comfortable"
      ]
    },
    {
      question: "How much does work-life balance matter to you?",
      options: [
        "Very important – I need time for my personal life",
        "Somewhat important – I like to have balance but can be flexible",
        "Not very important – I’m focused on my career and work takes priority",
        "Not important at all – I’m willing to sacrifice personal time for work"
      ]
    },
    {
      question: "When it comes to work, I value:",
      options: [
        "Freedom to make decisions",
        "Clear instructions and structure",
        "Opportunities for teamwork and collaboration",
        "Time to focus on personal growth and learning"
      ]
    },
    {
      question: "Which of these industries interests you the most?",
      options: [
        "Technology and innovation",
        "Healthcare and social services",
        "Business and finance",
        "Arts and entertainment",
        "Other"
      ]
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Detailed Career Quiz</h2>
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
  return <h2>Welcome to the Detailed Quiz</h2>;
}