import React, { useState, useEffect, useMemo } from "react";
import Input from "@mui/joy/Input";
import Cards from "./Cards";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const fetchUserDetails = async (users, token) => {
  return Promise.all(
    users.map(async (user) => {
      const detailResponse = await fetch(
        `https://api.github.com/users/${user.login}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      if (!detailResponse.ok) throw new Error("Error fetching user details");
      return detailResponse.json();
    })
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });

  const token = import.meta.env.VITE_TOKEN;

  const fetchUsers = async (username) => {
    setIsLoading(true);
    setError({ hasError: false, message: "" });

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const users = data.items || [];
      const userDetails = await fetchUserDetails(users, token);

      setUserData(userDetails);
    } catch (error) {
      console.error(error);
      setError({ hasError: true, message: "Failed to fetch users. Please try again." });
      setUserData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = debounce((event) => {
    const username = event.target.value;
    setSearchTerm(username);

    if (username) {
      fetchUsers(username);
    } else {
      setUserData([]);
    }
  }, 300); 

  // Memoized userData to prevent unnecessary renders
  const memoizedUserData = useMemo(() => userData, [userData]);

  return (
    <>
      <p className="logo">DevFinder.</p>

      <header className="header-content">
        <h1 className="header-text">"Connect, Collaborate, and Code</h1>
        <h1 className="header-text">with GitHub Developers"</h1>
        <Input
          className="search-bar"
          placeholder="Find your dev…"
          onChange={handleSearch}
          sx={{
            backgroundColor: "rgb(1, 4, 9, 50%)",
            borderStyle: "none",
            color: "#9198A1",
          }}
        />
      </header>

      {isLoading && <p className="loading">Loading...</p>}
      {error.hasError && <p style={{ color: "red" }}>{error.message}</p>}

      <div className="card-container" style={{marginBottom:"90px"}}>
        {memoizedUserData.length > 0 &&
          memoizedUserData.map((user) => <Cards key={user.id} user={user} />)}
      </div>

      <footer className={`footer ${memoizedUserData.length === 0 ? "visible" : ""}`}>
        <p className="footer-text">
          view DevFinder. on{" "}
          <a href="https://github.com/vishnu1002/dev-finder" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
