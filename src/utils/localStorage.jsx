const employees = [
  {
    "id": 1,
    "name": "John Doe",
    "password": "123",
    "email": "employee1@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Complete the project documentation",
        "description": "Document the project objectives, requirements, and implementation details. Include a step-by-step breakdown, technical specifications, and any relevant diagrams for clarity. Ensure accessibility for both technical and non-technical team members.",
        "date": "2024-10-23",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Set up the new server",
        "description": "Install and configure the new server, ensuring it meets the security standards required. Complete the setup for basic services and firewall configurations, and test connectivity and performance under various conditions.",
        "date": "2024-10-24",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Finish Q3 report",
        "description": "Prepare a comprehensive summary of Q3 activities, covering performance metrics, challenges faced, and major achievements. Include comparative data from previous quarters and suggestions for Q4 improvements.",
        "date": "2024-09-30",
        "category": "Reporting"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "password": "123",
    "email": "employee2@example.com",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare the marketing strategy",
        "description": "Develop a strategic marketing plan including target audience analysis, competitor benchmarking, and campaign goals. Outline key marketing channels, content strategy, and expected outcomes.",
        "date": "2024-10-15",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Conduct a product demo",
        "description": "Plan and execute a product demonstration for potential clients, showcasing key features, benefits, and unique selling points. Prepare for potential client questions and gather feedback post-demo.",
        "date": "2024-10-26",
        "category": "Sales"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Emily Johnson",
    "password": "123",
    "email": "employee3@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Research new suppliers",
        "description": "Investigate potential new suppliers based on cost efficiency, quality, and reliability. Conduct background checks and request samples where applicable. Provide a comparative report on top options.",
        "date": "2024-10-23",
        "category": "Procurement"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Prepare financial analysis",
        "description": "Analyze the company’s financial statements for current trends and projections. Create visualizations to highlight key metrics and provide actionable insights for budgeting decisions.",
        "date": "2024-10-22",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update the inventory list",
        "description": "Review and update the current inventory list, verifying quantities and item conditions. Note any discrepancies and update the system to reflect accurate stock levels.",
        "date": "2024-09-30",
        "category": "Logistics"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "Michael Brown",
    "password": "123",
    "email": "employee4@example.com",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Plan company event",
        "description": "Organize an event with a clear theme, schedule, and budget. Coordinate with vendors, finalize venue, and prepare invitations. Ensure contingency plans for unforeseen circumstances.",
        "date": "2024-10-29",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update employee records",
        "description": "Ensure all employee records are current and accurate. Update roles, addresses, and emergency contact information as needed. Review for compliance with company standards.",
        "date": "2024-10-01",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Organize training session",
        "description": "Plan and schedule a training session for team members, covering objectives and expected outcomes. Arrange materials and confirm attendance to ensure optimal engagement.",
        "date": "2024-10-28",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Sophia Davis",
    "password": "123",
    "email": "employee5@example.com",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix server issues",
        "description": "Investigate and resolve server issues affecting performance. Check logs, troubleshoot errors, and implement necessary fixes to restore optimal functionality.",
        "date": "2024-10-15",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create a backup strategy",
        "description": "Develop a comprehensive backup strategy to secure data and ensure disaster recovery readiness. Determine backup frequency, storage locations, and restoration procedures.",
        "date": "2024-10-24",
        "category": "IT"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];


const admin = [{
  "id": 1,
  "name": "Admin User",
  "password": "123",
  "email": "admin@example.com"
}];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
