# Tramplin Platform - Frontend

An interactive career ecosystem designed for centralized interaction between students, graduates, IT employers, and university career centers. This project was developed as part of the second stage of the "Applied Programming if...else" competition.

## 🚀 Tech Stack

The project is built using a cutting-edge, high-performance frontend stack:

* **Framework:** [React 19](https://react.dev/) (utilizing the new **React Compiler** for automatic memoization and optimized rendering).
* **Build Tool:** [Vite 8](https://vitejs.dev/) Next-generation frontend tooling for lightning-fast HMR.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) Leveraging the new engine with CSS-first configuration.
* **Components & UI:** [Radix UI](https://www.radix-ui.com/) (Primitives) + [Shadcn UI](https://ui.shadcn.com/) for accessible (A11Y) and consistent design patterns.
* **Maps:** [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/) for the interactive vacancy and event map.
* **Routing:** [React Router 7](https://reactrouter.com/) (supporting the latest routing conventions).
* **Typography:** [Geist Sans/Mono](https://vercel.com/font) for a clean, modern developer-centric aesthetic.

---

## 🛠 Functional Features

### 1. Map & Search (Landing Page)
* **Dual View:** Seamlessly toggle between an interactive Map (Leaflet) and a Feed (List View).
* **Geolocation:** Markers are placed at exact office addresses or the employer's city for remote roles.
* **Smart Filters:** Filter by tech stack (tags), seniority level (Junior/Middle/Senior), work format (Office/Hybrid/Remote), and salary range.
* **Quick Preview:** Modular hover-cards on map markers displaying key details (company, salary, core skills).
* **Favorites:** Local storage-based "Save" feature for unauthorized users with unique visual markers on the map.

### 2. Applicant Dashboard
* **Profile/Resume:** Manage technical skills, project portfolios, and repository links.
* **Networking:** Professional contacts system ("Friends") allowing users to view interests and recommend each other for roles.
* **Privacy Settings:** Granular control over profile visibility—choose to stay private or open for networking.
* **Application Tracking:** Real-time history of applications and their current statuses.

### 3. Employer Dashboard
* **Verification System:** Secure company onboarding via corporate email domain or Tax ID (INN) verification.
* **Opportunity Management:** Full CRUD operations for vacancies, internships, and career events.
* **Applicant Tracking (ATS):** View applicant profiles and manage candidate pipelines (Accepted / Rejected / In Reserve).

### 4. Curator (Admin) Panel
* Centralized moderation of all content and user profiles.
* Global tag management (adding/editing tech stack tags).
* Verification oversight for new employer accounts.

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/WebHayk/tramplin-frontend.git
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run development server:**
    ```bash
    yarn dev
    ```

4.  **Build for production:**
    ```bash
    yarn build
    ```

---

## 📁 Project Structure

* `src/components` - Reusable UI components (Shadcn + Radix primitives), business modules.
* `src/pages` - Main route components (Home, Profile, Admin).
* `src/lib` - Utilities and configurations (Tailwind merge, API clients).

---

*This project is submitted as the technical solution for the "Applied Programming if...else" Competition.*