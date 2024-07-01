TodoApp using Next.js and Prisma

Overview

This is a simple TodoApp built with Next.js and Prisma, demonstrating CRUD operations for managing tasks.

Features

Create new tasks with descriptions.
Read existing tasks, displaying them in a list format.
Update tasks to mark them as completed or update their details.
Delete tasks that are no longer needed.

Technologies Used
Next.js: React framework for server-side rendering and static site generation.
Prisma: Database toolkit and ORM for TypeScript and Node.js.
Filebase: Used for storage, with environment variable DATABASE_URL="file:/dev.db".

Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd todo-app
Install dependencies:

Copy code
npm install
Set up the database:

Ensure your DATABASE_URL environment variable is configured correctly for Filebase.
Run database migrations:
Copy code
npx prisma migrate dev
Start the development server:

arduino
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the TodoApp in action.

Usage
Adding a Task: Click on the "Add Task" button, enter the task details, and click "Save".
Updating a Task: Click on a task to edit its details, then click "Update".
Deleting a Task: Click on the delete icon next to a task to remove it from the list.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
