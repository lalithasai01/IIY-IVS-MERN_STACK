function App() {
  const students = ["lalli", "pras", "pavs", "lalitha"];

  return (
    <div>
      <h1>Rendering List Example</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
