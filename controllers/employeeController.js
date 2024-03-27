const Employee = require('../Models/user.employee');

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, department, salary } = req.body;
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      department,
      salary,
    });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error getting employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = { createEmployee, getAllEmployees};
