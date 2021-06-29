/* const exerciseForm = document.getElementById("exercise-form");
exerciseForm.addEventListener("submit", () => {
  const userId = document.getElementById("uid").value;
  exerciseForm.action = `/api/exercise-tracker/users/${userId}/exercises`;
  exerciseForm.submit();
});
 */
const form = document.querySelectorAll('form');
/* inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
}) */

form.forEach(elem => {
  elem.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputVal = e.target[0].value;
    const sourceForm = e.target.id.match(/.*(?=-form)/)[0]
    console.log(sourceForm)
    fetch(`http://127.0.0.1:3001/${sourceForm.toLowerCase()}/${inputVal}`)
      .then(response => response.json())
      .then(data => console.log(data))
  })
})

/* ${sourceForm.toLowerCase()} */