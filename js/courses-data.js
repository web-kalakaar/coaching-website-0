
const coursesData = [
  {
    id: "ssc",
    number: "01",
    title: "SSC Preparation",
    exams: "CGL · CHSL · MTS · GD Constable",
    duration: "8 months",
    mode: "Classroom + Online",
    nextBatch: "Next batch 1 Dec",
    medium: "Hindi and English",
    fee: "₹22,000",
    eligibility: "Graduate (CGL), 12th pass (CHSL), 10th pass (MTS)",

    intro: "A complete two-tier programme for SSC exams, from concept building to full-length mock tests. Every batch follows a fixed weekly plan so you always know what is being taught and when your next test is.",

    batches: [
      {
        name: "Morning Batch A",
        starts: "1 Dec 2026",
        days: "Mon to Sat",
        timing: "7:00 to 10:00 AM",
        mode: "Classroom",
        seats: "12",
        low: true
      },
      {
        name: "Evening Batch B",
        starts: "8 Dec 2026",
        days: "Mon to Sat",
        timing: "5:00 to 8:00 PM",
        mode: "Classroom",
        seats: "20"
      },
      {
        name: "Weekend Batch",
        starts: "5 Dec 2026",
        days: "Sat and Sun",
        timing: "10:00 AM to 4:00 PM",
        mode: "Hybrid",
        seats: "25"
      }
    ],

    subjects: [
      { name: "Quantitative Aptitude", teacher: "Priya Agarwal" },
      { name: "General Intelligence and Reasoning", teacher: "Amit Kumar" },
      { name: "English Language", teacher: "Sneha Verma" },
      { name: "General Awareness", teacher: "Vikram Singh" }
    ],

    included: [
      "Daily practice sets with solutions",
      "Weekly Sunday mock test with rank analysis",
      "Previous year papers, 2018 to 2025",
      "Printed notes and monthly current affairs",
      "Daily 30-minute doubt session",
      "Tier-II descriptive writing practice"
    ],

    scholarship: "Scholarship test on 13 Dec 2026 for up to 50% fee waiver."
  },

  {
    id: "banking",
    number: "02",
    title: "Banking Exams",
    exams: "IBPS PO · IBPS Clerk · SBI PO · SBI Clerk · RBI",
    duration: "9 months",
    mode: "Classroom + Online",
    nextBatch: "Next batch 2 Dec",
    medium: "Hindi and English",
    fee: "₹24,000",
    eligibility: "Graduate in any stream, age as per notification",

    intro: "Prelims, Mains and interview preparation under one roof. The course is built around speed and accuracy, with sectional tests and a dedicated interview and group discussion module run by our director.",

    batches: [
      {
        name: "Bank Morning",
        starts: "2 Dec 2026",
        days: "Mon to Sat",
        timing: "8:00 to 11:00 AM",
        mode: "Classroom",
        seats: "9",
        low: true
      },
      {
        name: "Bank Evening",
        starts: "9 Dec 2026",
        days: "Mon to Fri",
        timing: "4:30 to 7:30 PM",
        mode: "Classroom",
        seats: "18"
      },
      {
        name: "Bank Weekend",
        starts: "6 Dec 2026",
        days: "Sat and Sun",
        timing: "11:00 AM to 5:00 PM",
        mode: "Hybrid",
        seats: "22"
      }
    ],

    subjects: [
      { name: "Quantitative Aptitude and DI", teacher: "Priya Agarwal" },
      { name: "Reasoning and Puzzles", teacher: "Amit Kumar" },
      { name: "English Language", teacher: "Sneha Verma" },
      { name: "Banking and Financial Awareness", teacher: "Vikram Singh" },
      { name: "Interview and Group Discussion", teacher: "Rajesh Sharma" }
    ],

    included: [
      "Sectional and full-length online mock tests",
      "Speed-maths and shortcut workshops",
      "Monthly banking and economy digest",
      "Puzzle and seating-arrangement practice labs",
      "Mock interviews with feedback",
      "Application and form-filling support"
    ],

    scholarship: "Scholarship test on 13 Dec 2026 for up to 50% fee waiver."
  },

  {
    id: "railway",
    number: "03",
    title: "Railway Exams",
    exams: "RRB NTPC · Group D · ALP · JE",
    duration: "7 months",
    mode: "Classroom + Online",
    nextBatch: "Next batch 5 Dec",
    medium: "Hindi and English",
    fee: "₹16,000",
    eligibility: "10th, 12th or graduate depending on the post",

    intro: "Focused preparation for computer-based railway recruitment tests, with a strong base in mathematics and general science and regular practice on a CBT-style interface in our computer lab.",

    batches: [
      {
        name: "Railway Morning",
        starts: "5 Dec 2026",
        days: "Mon to Sat",
        timing: "6:30 to 9:30 AM",
        mode: "Classroom",
        seats: "15"
      },
      {
        name: "Railway Evening",
        starts: "12 Dec 2026",
        days: "Mon to Sat",
        timing: "5:30 to 8:30 PM",
        mode: "Classroom",
        seats: "24"
      }
    ],

    subjects: [
      { name: "Mathematics", teacher: "Priya Agarwal" },
      { name: "General Intelligence and Reasoning", teacher: "Amit Kumar" },
      { name: "General Science", teacher: "Vikram Singh" },
      { name: "General Awareness and Current Affairs", teacher: "Vikram Singh" }
    ],

    included: [
      "CBT practice in the computer lab",
      "Chapter-wise tests after every unit",
      "Railway previous year papers with analysis",
      "Science formula and concept booklets",
      "Weekly current affairs bulletin",
      "Doubt desk open six days a week"
    ],

    scholarship: "Scholarship test on 13 Dec 2026 for up to 50% fee waiver."
  },

  {
    id: "police",
    number: "04",
    title: "Police Exams",
    exams: "Rajasthan Police Constable · Sub Inspector · Delhi Police",
    duration: "6 months",
    mode: "Classroom",
    nextBatch: "Next batch 3 Dec",
    medium: "Hindi",
    fee: "₹12,000",
    eligibility: "12th pass (Constable), Graduate (SI), as per state rules",

    intro: "Written exam coaching and physical fitness training together. Morning batches begin with a supervised ground session so students build stamina while they study.",

    batches: [
      {
        name: "Police Morning + PT",
        starts: "3 Dec 2026",
        days: "Mon to Sat",
        timing: "5:30 to 8:30 AM",
        mode: "Classroom + Ground",
        seats: "18"
      },
      {
        name: "Police Evening",
        starts: "10 Dec 2026",
        days: "Mon to Sat",
        timing: "6:00 to 9:00 PM",
        mode: "Classroom",
        seats: "30"
      }
    ],

    subjects: [
      { name: "Rajasthan GK and Current Affairs", teacher: "Vikram Singh" },
      { name: "Reasoning", teacher: "Amit Kumar" },
      { name: "Mathematics", teacher: "Priya Agarwal" },
      { name: "Hindi and English", teacher: "Sneha Verma" },
      { name: "Physical Training", teacher: "Devendra Rathore (visiting)" }
    ],

    included: [
      "Supervised running, long jump and shot-put practice",
      "State-specific syllabus and paper pattern",
      "Interview and personality sessions",
      "Weekly full-length written mock",
      "Medical and document guidance",
      "Printed Rajasthan GK compendium"
    ],

    scholarship: "Scholarship test on 13 Dec 2026 for up to 50% fee waiver."
  },

  {
    id: "ldc",
    number: "05",
    title: "High Court and LDC",
    exams: "High Court Clerk · LDC · UDC · Junior Assistant",
    duration: "5 months",
    mode: "Classroom + Online",
    nextBatch: "Next batch 7 Dec",
    medium: "Hindi and English",
    fee: "₹14,000",
    eligibility: "12th pass or graduate, typing certificate where required",

    intro: "Designed for clerical and judicial-staff recruitment, combining the written syllabus with computer and typing skill tests that decide the final merit in many state exams.",

    batches: [
      {
        name: "LDC Morning",
        starts: "7 Dec 2026",
        days: "Mon to Sat",
        timing: "9:00 AM to 12:00 PM",
        mode: "Classroom",
        seats: "20"
      },
      {
        name: "LDC Evening",
        starts: "14 Dec 2026",
        days: "Mon to Fri",
        timing: "5:00 to 8:00 PM",
        mode: "Classroom",
        seats: "28"
      },
      {
        name: "Typing Lab (add-on)",
        starts: "7 Dec 2026",
        days: "Mon to Sat",
        timing: "12:30 to 2:00 PM",
        mode: "Computer lab",
        seats: "14"
      }
    ],

    subjects: [
      { name: "Computer Knowledge and Typing", teacher: "Neeraj Gupta (lab instructor)" },
      { name: "General Knowledge", teacher: "Vikram Singh" },
      { name: "Hindi and English", teacher: "Sneha Verma" },
      { name: "Reasoning and Maths", teacher: "Amit Kumar and Priya Agarwal" }
    ],

    included: [
      "Hindi and English typing practice daily",
      "MS Office and computer fundamentals",
      "Legal and judicial terminology primer",
      "State exam pattern mock tests",
      "Previous year High Court papers",
      "Skill-test preparation"
    ],

    scholarship: "Scholarship test on 13 Dec 2026 for up to 50% fee waiver."
  }
];
