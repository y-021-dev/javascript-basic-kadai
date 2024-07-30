const changedBtn = document.getElementById('btn');
const tmpText = document.getElementById('text');

changedBtn.addEventListener('click', () =>  {
  tmpText.textContent = 'ボタンをクリックしました';
});