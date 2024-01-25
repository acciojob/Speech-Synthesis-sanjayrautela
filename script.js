// Your script here.
<script>
  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const rateInput = document.querySelector('[name="rate"]');
  const pitchInput = document.querySelector('[name="pitch"]');
  const textInput = document.querySelector('[name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  // Function to populate voices dropdown
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
      .join('');
  }

  // Function to start speaking
  function startSpeaking() {
    msg.text = textInput.value;
    const selectedVoice = voices.find(voice => voice.name === voicesDropdown.value);
    if (selectedVoice) {
      msg.voice = selectedVoice;
    }
    msg.rate = parseFloat(rateInput.value);
    msg.pitch = parseFloat(pitchInput.value);
    speechSynthesis.speak(msg);
  }

  // Event listeners
  speakButton.addEventListener('click', startSpeaking);
  stopButton.addEventListener('click', () => speechSynthesis.cancel());

  // Initialize voices and populate dropdown
  populateVoices();
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
</script>

