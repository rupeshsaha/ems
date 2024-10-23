const employees = [
  {
    "id": 1,
    "password": "123",
    "email": "employee1@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Complete the project documentation",
        "date": "2024-10-23",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 2",
        "description": "Set up the new server",
        "date": "2024-10-24",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 3",
        "description": "Finish Q3 report",
        "date": "2024-09-30",
        "category": "Reporting"
      }
    ]
  },
  {
    "id": 2,
    "password": "123",
    "email": "employee2@example.com",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 1",
        "description": "Prepare the marketing strategy",
        "date": "2024-10-15",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 2",
        "description": "Conduct a product demo",
        "date": "2024-10-26",
        "category": "Sales"
      }
    ]
  },
  {
    "id": 3,
    "password": "123",
    "email": "employee3@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Research new suppliers",
        "date": "2024-10-23",
        "category": "Procurement"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 2",
        "description": "Prepare financial analysis",
        "date": "2024-10-22",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 3",
        "description": "Update the inventory list",
        "date": "2024-09-30",
        "category": "Logistics"
      }
    ]
  },
  {
    "id": 4,
    "password": "123",
    "email": "employee4@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Plan company event",
        "date": "2024-10-29",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Update employee records",
        "date": "2024-10-01",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 3",
        "description": "Organize training session",
        "date": "2024-10-28",
        "category": "HR"
      }
    ]
  },
  {
    "id": 5,
    "password": "123",
    "email": "employee5@example.com",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 1",
        "description": "Fix server issues",
        "date": "2024-10-15",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 2",
        "description": "Create a backup strategy",
        "date": "2024-10-24",
        "category": "IT"
      }
    ]
  }
];


        const admin = [{
          "id": 1,
          "password": "123",
          "email": "admin@example.com"
        }]
      

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))

  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))

  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}
  
  