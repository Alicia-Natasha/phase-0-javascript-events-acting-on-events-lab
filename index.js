// Your code here
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let right = parseInt(dodger.style.left);

    if (right < 790) {
        dodger.style.left = `${right + 10}px`;
    }
}