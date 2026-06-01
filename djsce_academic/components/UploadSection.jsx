import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize your Supabase client
// Replace these with your actual Supabase Project URL and Anon API Key
const SUPABASE_URL = "https://ijpcsvmrrfhvkezgzopf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcGNzdm1ycmZodmtlemd6b3BmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDIxNDA5NiwiZXhwIjoyMDk1NzkwMDk2fQ.85uVpERpG9DgHuw45xWEOG3cIykQclhie-D7cNYYfBA";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function UploadSection() {
  // 1. Define component states
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("ESE"); // Default selection
  const [academicYear, setAcademicYear] = useState("2025-26"); // Default value requested
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // 2. Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      setMessage({ text: "Only PDF files are allowed!", type: "error" });
      setFile(null);
      e.target.value = null; // Clear input field
      return;
    }
    setFile(selectedFile);
  };

  // 3. Handle Form Submission and Upload
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!subject.trim() || !file) {
      setMessage({
        text: "Please fill out all fields and select a PDF file.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setMessage({ text: "Uploading file to Supabase...", type: "info" });

    try {
      // Clean up the subject string (replace spaces with hyphens or underscores to maintain URL safety)
      const cleanSubject = subject.trim().replace(/\s+/g, "_");

      // Construct the strict naming convention requested: Subject_exam_academic-year(2025-26).pdf
      const customFileName = `${cleanSubject}_${examType}_${academicYear}.pdf`;

      // Specify your Supabase Bucket Name here
      const bucketName = "papers";

      // We will place it inside a folder named after the subject for clean organization
      const storagePath = `${cleanSubject}/${customFileName}`;

      // Upload the file to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(storagePath, file, {
          cacheControl: "3600",
          upsert: true, // Overwrites the file if it already exists
        });

      if (error) throw error;

      setMessage({
        text: `Successfully uploaded as: ${customFileName}`,
        type: "success",
      });

      // Reset form variables upon success (except constants)
      setSubject("");
      setFile(null);
      if (document.getElementById("file-input")) {
        document.getElementById("file-input").value = "";
      }
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
        {/* Subject Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Subject Name</label>
          <input
            type="text"
            placeholder="e.g., Operating Systems"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Exam Type Selector */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Type of Exam</label>
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            style={styles.select}
          >
            <option value="ESE">End Semester Exam (ESE)</option>
            <option value="TT1">Term Test 1 (TT1)</option>
            <option value="TT2">Term Test 2 (TT2)</option>
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
            type="file"
            onChange={handleFileChange}
            className="file:cursor-pointer block w-full text-sm text-slate-500 
                   file:mr-4 file:rounded-full file:border-0 
                   file:bg-violet-50 file:px-4 file:py-2 
                   file:text-sm file:font-semibold file:text-violet-700 
                   hover:file:bg-violet-100 "
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
            backgroundColor:
              message.type === "error"
                ? "#2c1515"
                : message.type === "success"
                  ? "#132d1f"
                  : "#1c2835",
            color:
              message.type === "error"
                ? "#ff6b6b"
                : message.type === "success"
                  ? "#4ade80"
                  : "#3b82f6",
            borderColor:
              message.type === "error"
                ? "#ea580c"
                : message.type === "success"
                  ? "#166534"
                  : "#1d4ed8",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

// Inline Styles for an immediate modern Dark UI look
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
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "1rem",
  },
  select: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
  },
  fileInput: {
    padding: "0.5rem 0",
    color: "#b0b0b0",
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
