export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  export const USER_DATA: User[] = [
    { id: 1, name: 'Ajay', email: 'ajay@example.com', role: 'Admin' },
    { id: 2, name: 'Rohit', email: 'rohitkumar@example.com', role: 'User' },
    { id: 3, name: 'Shivam', email: 'shivam@example.com', role: 'Moderator' },
    { id: 4, name: 'Rajat', email: 'rajat@example.com', role: 'Admin' },
    { id: 5, name: 'Shiv', email: 'shiv@example.com', role: 'Moderator' },
    { id: 6, name: 'Shiva', email: 'shiva@example.com', role: 'User' },
    { id: 7, name: 'Mayank', email: 'mayank@example.com', role: 'Moderator' },
    { id: 8, name: 'Sarah Kim', email: 'sarah.kim@example.com', role: 'Admin' },
    { id: 9, name: 'David Clark', email: 'david.clark@example.com', role: 'User' },
    { id: 10, name: 'Laura Martinez', email: 'laura.martinez@example.com', role: 'Moderator' },

    
  ];