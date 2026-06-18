import { createHashRouter } from "react-router";
import Root from "./pages/root";
import Home from "./pages/home";
import EducationPage from "./pages/education-page";
import ExperiencePage from "./pages/experience-page";
import AllProjectsPage from "./pages/all-projects";
import CloudMigrationPage from "./pages/cloud-migration";
import PlanetsBeyondPage from "./pages/planets-beyond";
import LibraryManagementPage from "./pages/library-management";
import DatabaseSystemsPage from "./pages/database-systems";
import EmployeeTrackingPage from "./pages/employee-tracking";
import SAGINPage from "./pages/sagin";

// GitHub Pages does not rewrite nested routes to index.html. Hash routing
// keeps every route reloadable on static hosting.
export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "education",
        Component: EducationPage
      },
      {
        path: "experience",
        Component: ExperiencePage
      },
      {
        path: "projects",
        Component: AllProjectsPage
      },
      {
        path: "projects/cloud-migration",
        Component: CloudMigrationPage
      },
      {
        path: "projects/planets-beyond",
        Component: PlanetsBeyondPage
      },
      {
        path: "projects/library-management",
        Component: LibraryManagementPage
      },
      {
        path: "projects/database-systems",
        Component: DatabaseSystemsPage
      },
      {
        path: "projects/employee-tracking",
        Component: EmployeeTrackingPage
      },
      {
        path: "projects/sagin",
        Component: SAGINPage
      }
    ]
  }
]);
