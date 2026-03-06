import './App.css';
import Controls from './Controls';
import Footer from './Footer';
import UserList from './UserList';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>

      {isLoggedIn && (
        <>
          <section>
            <Controls />
          </section>

          <section>
            <h2>User List</h2>
            <UserList />
          </section>

          <section>
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
