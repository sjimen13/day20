window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  const trascript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');
  p.textContent = trascript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  if (trascript.includes('laurita')) {
    console.log('😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬😬');
  }
  console.log(trascript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();
