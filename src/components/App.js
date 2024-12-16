import './App.css';

function App() {

  const SUBJECT_LINE = "Hey Cole, I would love to connect! \u{1F525}"

  return (
    <div class=''>
      <div class="bg-background bg-noise filter noise-">
        <div class="flex flex-grow items-center h-screen justify-center">
          <div class="grid place-items-center auto-rows-auto gap-y-1 text-white text-center">
            <img class="h-[55%] w-auto rounded-3xl border-white border-2 shadow-xl" src={'images/me.jpeg'} alt=''></img>
            <h1 class="text-5xl">cole lanham - personal site</h1>
            <p>v.0.2.1</p>
            <h2 class="text-xl italic">wannabe swe | digital minimalist | cultural heretic</h2>
            <ul class="text-xl flex gap-4">
              <li><a class="underline hover:text-yellow-100 hover:decoration-yellow-100" href='docs/colelanham_resume2024.pdf' target='_blank' rel="noreferrer">resume </a></li>
              <li><a class="underline hover:text-yellow-100 hover:decoration-yellow-100" href={'mailto:coleklanham@gmail.com?subject=' + SUBJECT_LINE}>contact me</a></li>
            </ul>
          </div>
        </div>

        <div>
          <ul class="fixed bottom-0 left-0 right-0 flex space-x-4 justify-center text-center text-white text-xl">
            <li><a class="underline hover:text-yellow-100 hover:decoration-yellow-100" href='https://github.com/colanham' target='_blank' rel="noreferrer">github.com</a></li>
            <li><a class="underline hover:text-yellow-100 hover:decoration-yellow-100" href='https://x.com/GoalLanham' target='_blank' rel="noreferrer">x.com</a></li>
            <li><a class="underline hover:text-yellow-100 hover:decoration-yellow-100" href='https://linkedin.com/in/cole-lanham' target='_blank' rel="noreferrer">linkedin.com</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
