const form = document.getElementById('employeeForm');
const name = document.getElementById('name').value;
const id = document.getElementById('id').value;


function fetchEmployees() {
  fetch('http://[::1]:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => deleteEmployee(item.id)); 
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  createEmployee();
  // Get the values from the form fields
  
});


// Add a submit event listener to the form
// TODO
// add event listener to delete button
// added in fetchemployees

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees


  // Create an object with the data
  const data = {
    name: name,
    id: id
  };

  // Send the data to the backend
  fetch('http://[::1]:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    fetchEmployees();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



// TODO
function deleteEmployee(id) {
  // Send the id to the backend for deletion
  fetch(`http://[::1]:3000/api/v1/employee/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      fetchEmployees();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


fetchEmployees()
