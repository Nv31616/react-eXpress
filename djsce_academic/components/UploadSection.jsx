import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize your Supabase client
const SUPABASE_URL = "https://ijpcsvmrrfhvkezgzopf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcGNzdm1ycmZodmtlemd6b3BmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDIxNDA5NiwiZXhwIjoyMDk1NzkwMDk2fQ.85uVpERpG9DgHuw45xWEOG3cIykQclhie-D7cNYYfBA";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🌟 Extracted Unique Subject Array List
const AVAILABLE_SUBJECTS = [
  "Advanced Algorithm", "Advanced Algorithms", "Advanced Data Structures and Algorithms",
  "Advanced Database Management System", "Advanced Digital Signal Processing", "Advanced Java Laboratory",
  "Advanced Machine Learning", "Advanced Operating System", "Advanced Quantitative Techniques",
  "Advanced Security", "Advanced VLSI", "Adv. Business Intelligence", "Additive Manufacturing",
  "Analog Communication", "Analysis of Algorithms", "Applied Cryptography", "Applied Mathematics",
  "Artificial Intelligence", "Artificial Intelligence in Cybersecurity", "Artificial Intelligence in Finance",
  "Automobile Engineering", "Automotive Prime Movers", "Basic VLSI", "BEE", "Big Data Analysis",
  "Big Data Analytics", "Big Data Infrastructure", "Big Data Laboratory", "Bioinformatics",
  "Blockchain Architecture", "Blockchain for Cybersecurity", "Blockchain Technology", "Business Analytics",
  "CAD/CAM/CIM", "CEM", "Chemistry", "Cloud Computing", "Cloud Computing and Security",
  "Cloud Computing Laboratory", "Cognitive Computing", "Community Engagement Service", "Compiler Design",
  "Computational Fluids Dynamics", "Computational Methods and Pricing Models", "Computational Motion Planning",
  "Computational Neuroscience", "Computer Aided Machine Drawing Laboratory", "Computer Communication and Networks",
  "Computer Graphics", "Computer Graphics & Virtual Reality", "Computer Networks", "Computer Networks & Security",
  "Computer System Fundamentals", "Computer Vision", "Computer Vision-I", "Computer Vision-II",
  "Constitution of India", "Control Systems", "Corporate Finance Management", "Corporate Social Responsibility",
  "Cryptography and Network Security", "Cryptocurrency Technology", "Cyber Security and Laws",
  "Cyber Security, Policies and Laws", "Cybersecurity", "Data Analytics Laboratory", "Data Compression & Encryption",
  "Data Engineering", "Data Engineering & Visualization Laboratory", "Data Mining and Warehouse",
  "Data Science Laboratory (Python)", "Data Structures", "Data Structures and Algorithms",
  "Data Warehousing and Mining", "Database Management System", "Database Management System Laboratory",
  "Database Management Systems", "Database Systems", "Deep Learning", "Department Elective 1- MLOps",
  "Department Elective 1- DevOps", "Department Elective 2- Game Programming", "Department Elective 2- Spatial Data Analytics",
  "Department Elective 3- Computational Intelligence", "Department Elective 3- Computer Graphics & Virtual Reality",
  "Department Elective 4- Web Programming", "Department Elective 4- Text, Web & Social Analytics",
  "Design and Analysis of Algorithms", "Design of Heat Exchanger Equipments", "Design of Mechanical Systems",
  "Design Patterns", "Design Thinking", "Design Thinking Laboratory", "DevOps Laboratory",
  "Digital Communication", "Digital Electronics", "Digital Marketing Management", "Digital Signal Processing",
  "Digital Signal Processing and Applications", "Digital System Design", "Disaster Management and Mitigation Measures",
  "Discrete Structures", "Distributed Computing", "Economics and Financial Management", "Econometric Modelling",
  "ECS", "Electrical Networks Analysis & Synthesis Laboratory", "Electronics Circuit Design",
  "Electromagnetic Wave Propagation", "EME", "Embedded System and IoT", "Embedded Systems", "EMN",
  "Energy Audit and Management", "Engineering Mathematics III", "Engineering Mathematics - III",
  "Engineering Mathematics-III", "Engineering Mathematics IV", "Engineering Mathematics - IV",
  "Engineering Mathematics-IV", "Engineering Thermodynamics", "Engg. Graphics",
  "Enterprise Governance of Information Technology", "Entrepreneurship and Startup Ecosystem",
  "Entrepreneurship Development and Management", "Environmental Engineering", "Environmental Management",
  "Environmental Studies", "Ethical AI", "Ethical Hacking and Digital Forensics", "FAIDS", "FAIML", "FDA",
  "Financial Decision Making", "Financial Market and Risk Analysis", "Finite Element Analysis", "FIT",
  "Fluid Mechanics", "Formal Language & Automata Theory", "Formal Languages and Automata Theory",
  "Foundation of Data Science", "Fundamentals of Biomedical Instruments", "Fundamentals of Digital Image Processing",
  "FSST", "Game Design", "Gamification", "Geo-Spatial Data Science", "High Performance Computing",
  "Heat Transfer", "Human Machine Interaction", "Human Resource Management", "Image Generative AI",
  "Image Processing and Computer Vision", "Industrial Automation Laboratory", "Industrial Engineering",
  "Industrial Electronics and Controls", "Industrial Internet of Things", "Industrial Internet of Everything",
  "Industrial Waste Management", "Infrastructure Security", "Information Security", "Innovative Product Development I",
  "Innovative Product Development II", "Innovative Product Development III", "Innovative Product Development IV",
  "Innovative Product Development-I", "Innovative Product Development-II", "Innovative Product Development-III",
  "Innovative Product Development-IV", "Institute Elective", "Institute Level Optional Courses- I",
  "Institute Level Optional Courses- II", "Institute Professional Elective", "Integrated Circuits",
  "Intelligent Systems", "Internet Engineering & Network Security", "Internet of Things", "IoT & Edge Computing",
  "IoT and Applications", "IPR & Patenting", "IPR and Patenting", "Java", "Kinematics of Machinery",
  "Labour and Corporate Law", "Language Models", "Linear Algebra", "Linear Algebra and Optimization Techniques",
  "Logistics and Supply Chain Management", "Machine Health Monitoring Management", "Machine Design I",
  "Machine Design II", "Machine Learning", "Machine Learning - I", "Machine Learning-II (Deep Learning)",
  "Machine Learning - III (Reinforcement Learning)", "Machine Learning for Signal Processing", "Machine Tool Engineering",
  "Machine Shop Practice I", "Machine Shop Practice II", "Malware Analysis", "Management Information System",
  "Manufacturing Processes", "Materials Technology", "Mathematics for Intelligent Systems", "Maths", "Maths-II",
  "Mechanical Measurements and Metrology", "Mechanical Vibrations", "Mechatronics", "Microcontrollers and Embedded Systems",
  "Microcontroller & Applications-I", "Microcontroller & Applications II", "Microwave Amplifier & Oscillator Design",
  "Microwave Engineering", "Mobile Communication System", "Mobile Device Security and Forensics",
  "Motor Sports Engineering", "Natural Language Processing", "Natural Language Text Processing", "Network Engineering",
  "Neural Network & Fuzzy Logic", "Open Elective I", "Open Elective II", "Open Digital Library Courses/MOOC",
  "Open Source Technologies Laboratory", "Operating System", "Operating Systems", "Operations Research",
  "Optical Communication", "Parallel and Distributed Computing", "Personal Finance Management", "Physics",
  "Power Engineering", "Power Electronics", "Predictive Analytics", "Predictive Modeling", "Probabilistic Graph Models",
  "Probabilistic Models", "Process Equipment Design", "Processor Organization and Architecture",
  "Production Planning and Control", "Professional and Business Communication", "Professional and Business Communication Laboratory",
  "Professional and Business Communication Tutorial", "Professional Communication & Ethics",
  "Programming Laboratory I (Python Programming)", "Programming Laboratory II (Web Development)",
  "Programming Laboratory-I (Java)", "Programming Laboratory-II (Python)",
  "Programming Laboratory-III (Full Stack Development using NextJs)", "Project Management", "Public System & Policies",
  "Public Systems and Policies", "Python for Mechanical Engineering", "Python Programming Laboratory", "Quality Engineering",
  "Quantum AI", "Quantum Computing", "Quantitative Portfolio Management", "Radar Engineering", "Radiating Systems",
  "Radio Frequency Circuit Design", "Recommendation Systems", "Refrigeration and Air Conditioning", "Reinforcement Learning",
  "Reliability Engineering", "Renewable Energy Systems", "Research Methodology", "Robotics", "Robotics & AI",
  "Satellite Communication", "Science of Well-being", "Secure Software Engineering", "Secure Software Systems",
  "Semantic Web Technology", "Service Oriented Architecture", "Smart Industries", "Smart Materials", "Signals & Systems",
  "Social Network Analysis", "Software Architecture", "Software Engineering", "Software Testing and Quality Assurance",
  "SPC", "Speech Processing", "Statistical Analysis", "Statistics for Data Science", "Statistics for Engineers",
  "Strength of Materials", "Sustainable Energy Management", "Theoretical Computer Science", "Time Series Analysis",
  "Time Series Analysis for Financial Applications", "Tribology", "UI/UX Design", "Universal Human Values",
  "User Centered Design", "Web Application Development Laboratory", "Web Engineering Laboratory", "Web Intelligence",
  "Web Programming Laboratory", "Wireless Network", "Wireless Sensor Network"
];

export default function UploadSection() {
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("TT1"); 
  const [academicYear, setAcademicYear] = useState("2025-26"); 
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      setMessage({ text: "Only PDF files are allowed!", type: "error" });
      setFile(null);
      e.target.value = null; 
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!subject || !file) {
      setMessage({
        text: "Please select a valid subject and choose a PDF file.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setMessage({ text: "Uploading file to Supabase...", type: "info" });

    try {
      // 🌟 SAFE REGEX CLEANING: Converts special symbols like spaces, dashes, commas, dots to clean underscores 
      // e.g., "Maths-II" -> "Maths_II", "Engg. Graphics" -> "Engg__Graphics"
      const cleanSubject = subject.trim().replace(/[\s\.\,\-]+/g, "_");

      const customFileName = `${cleanSubject}_${examType}_${academicYear}.pdf`;
      const bucketName = "subjects";
      const storagePath = `${examType}/${cleanSubject}/${customFileName}`;

      const { error } = await supabase.storage
        .from(bucketName)
        .upload(storagePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;

      setMessage({
        text: `Successfully uploaded under ${examType}/${cleanSubject}!`,
        type: "success",
      });

      // Clear layout elements
      setSubject("");
      setFile(null);
      const fileInput = document.getElementById("file-input");
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error("Upload Error Details:", error);
      setMessage({ text: `Upload failed: ${error.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Academic Document Upload Portal</h2>

      <form onSubmit={handleUpload} style={styles.form}>
        
        {/* 🌟 MODIFIED: Dropdown Selection list instead of standard type input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Select Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.select}
            required
          >
            <option value="" disabled>-- Choose a Subject from Curriculum --</option>
            {AVAILABLE_SUBJECTS.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Exam Type Selector */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Type of Exam</label>
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            style={styles.select}
          >
            <option value="TT1">Term Test 1 (TT1)</option>
            <option value="TT2">Term Test 2 (TT2)</option>
            <option value="ESE">End Semester Exam (ESE)</option>
            <option value="Syllabus">Syllabus</option>
          </select>
        </div>

        {/* Academic Year Selection */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Academic Year</label>
          <select
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            style={styles.select}
          >
            <option value="2025-26">2025-26 (Current)</option>
            <option value="2026-27">2026-27</option>
            <option value="2024-25">2024-25</option>
          </select>
        </div>

        {/* PDF File Picker */}
        <label className="my-4 block">
          <input
            id="file-input"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="file:cursor-pointer block w-full text-sm text-slate-500 
                   file:mr-4 file:rounded-full file:border-0 
                   file:bg-violet-50 file:px-4 file:py-2 
                   file:text-sm file:font-semibold file:text-violet-700 
                   hover:file:bg-violet-100"
            required
          />
        </label>

        {/* Action Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            backgroundColor: loading ? "#666" : "#3ecf8e",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Processing Upload..." : "Upload Document"}
        </button>
      </form>

      {/* Status Notifications */}
      {message.text && (
        <div
          style={{
            ...styles.messageBox,
            backgroundColor: message.type === "error" ? "#2c1515" : message.type === "success" ? "#132d1f" : "#1c2835",
            color: message.type === "error" ? "#ff6b6b" : message.type === "success" ? "#4ade80" : "#3b82f6",
            borderColor: message.type === "error" ? "#ea580c" : message.type === "success" ? "#166534" : "#1d4ed8",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#1c1c1c",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    fontFamily: "system-ui, sans-serif",
    color: "#ededed",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#3ecf8e",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#b0b0b0",
  },
  select: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    maxHeight: "200px" // Limits length context out of container box
  },
  button: {
    padding: "0.85rem",
    border: "none",
    borderRadius: "6px",
    color: "#121212",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.2s",
  },
  messageBox: {
    marginTop: "1.5rem",
    padding: "1rem",
    borderRadius: "6px",
    border: "1px solid",
    textAlign: "center",
    fontSize: "0.95rem",
  },
};