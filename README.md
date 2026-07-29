

The Tech Stack:

Next.js (App Router): For seamless routing and server/client component management.

React.js: For building a modular, interactive UI.

Tailwind CSS: For rapid, responsive styling.

Lucide-React: For crisp, lightweight iconography.


Accredian Enterprise - Landing Page Clone
This project is a responsive, component-based clone of the Accredian Enterprise landing page. It was built to demonstrate a solid understanding of modern frontend architecture, responsive design, and state management within a Next.js environment.

🧩 Core Parts of the Project
The application is built using a modular component architecture. Instead of putting everything in one massive file, the UI is broken down into reusable pieces:

Interactive Sections: Components like the Faqs section utilize React's useState hook to manage interactive dropdowns (accordions).

Lead Capture Modal: The LeadCapture form is built as a dynamic overlay (modal) that triggers when the user clicks "Enquire Now," keeping the UI clean and focused.

Mock Backend API: Utilized the Next.js App Router file-system routing to create a mock API endpoint (src/app/api/leads/route.js) that safely handles POST requests from the lead form.

Responsive Layout: Tailwind CSS is used extensively to ensure the grid layouts (like the Features and Stats sections) collapse gracefully on mobile devices.

🛠️ Setup Instructions
To run this project locally, you will need Node.js installed on your machine.

Clone the repository:
git clone <your-repo-link>
cd <your-project-folder>

Install dependencies:
npm install

Start the development server:
npm run dev

View the application:
Open your browser and navigate to http://localhost:3000.

🧠 Approach Taken
My primary goal was to prioritize structure, component reusability, and clarity over pixel-perfect mimicry, as requested in the assignment.

UI/UX Analysis: I started by analyzing a video walkthrough of the live Accredian site to map out the user journey and identify the necessary structural blocks (Hero, Stats, Clients, Framework, FAQs).

Component Architecture: I built the application from the outside in. I established the main page layout first, then built and injected individual components (Hero.jsx, Faqs.jsx, etc.) to keep the codebase clean and maintainable.

Routing Implementation: I utilized Next.js's App Router to handle the page structure and implemented a dedicated route.js file to simulate backend form processing, ensuring the frontend had a designated place to send data.

🤖 AI Usage Explanation
I strongly believe in using AI as a pair-programming partner to accelerate development while maintaining complete architectural control. Here is a transparent breakdown of the workflow for this project:

What I Contributed (The Logic & Architecture): I was responsible for the project setup, folder hierarchy, and defining the component structure. I managed the extraction and placement of static assets (images/favicons), handled the state management logic linking the UI to the user inputs, and debugged the Next.js specific routing configurations to ensure the mock API connected properly to the frontend.

What AI Contributed (The Accelerator): I utilized Google Gemini to rapidly generate the boilerplate HTML/JSX and Tailwind utility classes for repetitive grid layouts (like the 3-column features and stats sections). I also used AI to quickly look up specific Tailwind syntax and to clarify the strict file-naming conventions required by the Next.js App Router (e.g., differentiating between standard Node routes and Next.js route.js requirements).

This collaboration allowed me to focus heavily on the structural flow and problem-solving rather than getting bogged down typing repetitive CSS classes.

Improvements with More Time
If given more time to expand this project, I would implement the following:

Real Backend Integration: I would replace the mock API route with a live database connection. Because I frequently build complex web portals using React, Node.js, and serverless architectures, I would integrate a Supabase backend to actually store the captured leads and handle user authentication smoothly.

Form Validation: I would add a library like Zod or Yup to strictly validate the lead capture form inputs before they are submitted, providing better error messages to the user.

Micro-Interactions & Animations: While the structural CSS is solid, I would add Framer Motion to introduce smooth scroll reveals and micro-interactions when hovering over the client logos and framework icons.

Dynamic Data Fetching: Instead of hardcoding the FAQs and Stats into the components, I would fetch this data dynamically from a headless CMS so marketing teams could update the site without touching the code.

Submitted by: Bhavesh Jain