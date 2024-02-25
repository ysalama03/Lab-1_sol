const express = require('express');
const app = express();
const port = 3000; 
app.use(express.json());
const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  app.delete('/employee/:id', (req, res) =>{
    const employeeId = req.params.id;

    // Find the index of the employee with the specified ID
    const index = employee.findIndex((employee) => employee.id === employeeId);
  
    if (index !== -1) {
      // Remove the employee from the array
      employees.splice(index, 1);
    
    const response = {
      message: `Employee with ID ${employeeId} deleted successfully`
    };
  
    res.status(200).json(response);
}});
};

// TODO
exports.createEmployee = async (req, res, next) => {
  app.post('/employee', async (req, res, next) => {
    try {
      const name = req.body.name;
      const id = req.body.id;
      const response = {
        message: 'Employee created successfully',
        data: {
          id: id,
          name: name
        }
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
};
