

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 0,
      total: 3
    },
    tasks: [
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        serverDescription: "Resolve issue where login form throws 500 error",
        date: "2025-06-17T 09:00:00Z",
        category: "Bug Fix"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Implement dark mode",
        serverDescription: "Add toggle switch for dark mode UI",
        date: "2025-06-15T 14:30:00Z",
        category: "Feature"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write unit tests",
        serverDescription: "Create tests for authentication flow",
        date: "2025-06-18T 10:00:00Z",
        category: "Testing"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 1,
      total: 4
    },
    tasks: [
      {
        ActiveXObject: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update dashboard UI",
        serverDescription: "Redesign the employee dashboard layout",
        date: "2025-06-12T 08:30:00Z",
        category: "UI/UX"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database migration",
        serverDescription: "Migrate DB to new schema",
        date: "2025-06-19T 12:00:00Z",
        category: "Database"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Set up CI/CD pipeline",
        serverDescription: "Integrate GitHub Actions",
        date: "2025-06-10T 15:00:00Z",
        category: "DevOps"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize images",
        serverDescription: "Reduce image sizes for faster load",
        date: "2025-06-17T 11:00:00Z",
        category: "Performance"
      }
    ]
  },
  {
    id: 3,
    firstName: "Vedika",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0,
      total: 3
    },
    tasks: [
      {
        ActiveXObject: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API documentation",
        serverDescription: "Document all backend API endpoints",
        date: "2025-06-13T 10:30:00Z",
        category: "Documentation"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Security audit",
        serverDescription: "Run vulnerability scan",
        date: "2025-06-18T 09:30:00Z",
        category: "Security"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Install monitoring tools",
        serverDescription: "Set up Grafana and Prometheus",
        date: "2025-06-16T 16:00:00Z",
        category: "Monitoring"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 3,
      new: 3,
      completed: 1,
      failed: 1,
      total: 5
    },
    tasks: [
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Refactor codebase",
        serverDescription: "Simplify state management",
        date: "2025-06-20T 13:00:00Z",
        category: "Refactoring"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create reusable components",
        serverDescription: "Build UI component library",
        date: "2025-06-14T 11:00:00Z",
        category: "Frontend"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix mobile responsiveness",
        serverDescription: "Ensure layout adapts across devices",
        date: "2025-06-17T 17:00:00Z",
        category: "UI/UX"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy to staging",
        serverDescription: "Push latest build to staging server",
        date: "2025-06-15T 19:00:00Z",
        category: "Deployment"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research state libraries",
        serverDescription: "Evaluate Redux vs Zustand",
        date: "2025-06-18T 08:00:00Z",
        category: "Research"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 1,
      total: 4
    },
    tasks: [
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop chat module",
        serverDescription: "Build internal messaging system",
        date: "2025-06-17T 15:00:00Z",
        category: "Feature"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code review for PR#123",
        serverDescription: "Review John’s latest pull request",
        date: "2025-06-16T 13:00:00Z",
        category: "Code Review"
      },
      {
        ActiveXObject: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Improve accessibility",
        serverDescription: "Implement ARIA roles",
        date: "2025-06-19T 10:30:00Z",
        category: "Accessibility"
      },
      {
        ActiveXObject: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update third-party libs",
        serverDescription: "Upgrade React and dependencies",
        date: "2025-06-12T 14:00:00Z",
        category: "Maintenance"
      }
    ]
  }
];

const admin = [
  {
    id: 1,

    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    const admin = JSON.parse(localStorage.getItem('admin') || '[]');

    return {employees, admin};
}