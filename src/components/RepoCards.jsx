import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RepoCards.css";

function RepoCards() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(6);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/sezmanrealtech/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  //  Getting my repo Cards
  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repos/${userElement.name}`}>
          <h3 className="repo-name">{userElement.name}</h3>
        </Link>

        <p>
          {" "}
            wacthing: {userElement.watchers_count}
        </p>

        <p>
          {" "}
           Fork: {userElement.forks_count}
        </p>

        <p>
          {" "}
           star: {userElement.stargazers_count}
        </p>
      </div>
    );
  });

  const Display = () => {
    if (userElements.length >= currentPage) {
      for (let i = 0; i < currentPage; i++) {
        totalPage.push({ ...userElements[i] });
      }
    } else {
      return userElements;
    }
    return totalPage;
  };

  function next(event) {
    if (currentPage >= userElements.length) {
      event.target.textContent = "The End";
    } else {
      setCurrentPage((prev) => prev + 6);
    }
  }

  return (
    <div className="MainRepo">
      <section className="repo-container">
        <Display />
      </section>
      <div>
        <p onClick={next}>More</p>
      </div>
    </div>
  );
}

export default RepoCards;
