const changedBtn = document.getElementById('btn');

const tmpText = document.getElementById('text');

changedBtn.addEventListener('click', () => {
  setTimeout(() => {
    tmpText.textContent = 'ボタンをクリックしました'; 
  }, 2000);
});