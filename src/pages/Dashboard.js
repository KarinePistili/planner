import TemplateWithSideBar from "../components/templates/TemplateWithSideBar";

export default function Dashboard() {
  function dashboardScreen() {
    return (
      <main>
        <h1>Dashboard</h1>
      </main>
    )
  }

  return (
    <main>
      <TemplateWithSideBar component={dashboardScreen()} />
    </main>
  );
}