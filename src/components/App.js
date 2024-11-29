import './App.css';

function App() {

  const SUBJECT_LINE = "Hey Cole, I would love to connect! \u{1F525}"

  return (
    <div className='App'> 
      <div className='info-container'>
        <div className='info'>
          <h1>cole lanham - personal site</h1>
          <p>v.0.1</p>
          <h2>wannabe swe | digital minimalist | cultural heretic</h2>
          <div className='contact-links'>
            <ul>
              <li><a href='docs/colelanham_resume2024.pdf' target='_blank' rel="noreferrer">resume </a></li>
              <li><a href={'mailto:coleklanham@gmail.com?subject=' + SUBJECT_LINE}>contact me</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bottom-container'>
        <ul>
          <li><a href='https://github.com/colanham' target='_blank' rel="noreferrer">github.com</a></li>
          <li><a href='https://x.com/GoalLanham' target='_blank' rel="noreferrer">x.com</a></li>
          <li><a href='https://linkedin.com/in/cole-lanham' target='_blank' rel="noreferrer">linkedin.com</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
