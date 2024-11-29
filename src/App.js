import './App.css';

function App() {

  const SUBJECT_LINE = "Hey Cole, I would love to connect! \u{1F525}"

  return (
    <div className='App'> 
      <div className='info-container'>
        <div className='info'>
          <h1>c. k. lanham - personal site</h1>
          <h2>wannabe swe | digital minimalist | cultural heretic</h2>
          <ul>
            <li><a href='docs/colelanham_resume2024.pdf' target='_blank' rel="noreferrer">resume</a></li>
            <li><a href={'mailto:coleklanham@gmail.com?subject=' + SUBJECT_LINE}>contact me</a></li>
          </ul>
        </div>
      </div>

      <div className='bottom-container'>
        <ul>
          <li><a href='https://github.com/colanham' target='_blank' rel="noreferrer">github</a></li>
          <li><a href='https://x.com/GoalLanham' target='_blank' rel="noreferrer">x</a></li>
          <li><a href='https://linkedin.com/in/cole-lanham' target='_blank' rel="noreferrer">linkedin</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
