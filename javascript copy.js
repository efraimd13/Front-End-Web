// Untuk simpan input
const form = document.querySelector('form');
form.addEventListener('submit', insertStudent);
//
function insertPlayer(e) {
    e.preventDefault();
  
  // get user input
    let studentNIM = document.querySelector('#studentNIM');
    let studentName = document.querySelector('#studentName');
  
    console.log(`${studentNIM.value} / ${studentName.value}`);
}




// // Untuk delete list
// const playerLi = document.querySelector('#player');
// playerLi.addEventListener('click', removeFaculty);
// // Delete
// let deleteLink = document.createElement('a');
// deleteLink.className = 'delete';
// deleteLink.setAttribute('href', '#');
// deleteLink.appendChild(document.createTextNode(' | delete this link'));

// li.appendChild(deleteLink);

// // Funcution Delete
// function removeFaculty(event) {
//     if(event.target.classList.contains('delete-button')) {
//       const li = event.target.parentElement;
//       playerLi.removeChild(li);
//     }
//   }
