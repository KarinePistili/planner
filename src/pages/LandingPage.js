import '../styles/LandingPage.css';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  let navigate = useNavigate();

  function goTo() {
    navigate("/dashboard");
  }

  return (
    <main>
      <div class="bg-img">
        <div class="container">
          <h1 class="main-title">Life Planner</h1>
          <div class="content-side">
            <p class="short-paragraph">Tired of not having control over your life? <br></br>Change it!</p>
            <button class="btn" onClick={goTo}>
                <i class="mdi mdi-google btn-icon"></i>
                <span class="btn-icon-text">
                  Sign in with Google
                </span>
            </button>
          </div>
          </div>
      </div>
    </main>
  );
}