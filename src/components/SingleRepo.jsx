import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/SingleRepo.css";

function SingleRepo() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/sezmanrealtech/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  console.log(user);

  return (
    <>
      <div className="repoview-card" key={user.id}>
        <h3 className="repo-name">Repo Name: {user.name}</h3>

        <h5 className="repo-id">Repo Id: {user.id} </h5>

        <p className="default-branch">
          Default Branch: <b>{user.default_branch}</b>
        </p>

        <p className="date">
          {" "}
          Date Created: <b> {new Date(user.created_at).toDateString()}</b>
        </p>

        <p className="Update">
          Last Update: <b>{new Date(user.updated_at).toDateString()}</b>
        </p>

        <p className="Pushed">
          Date Pushed: <b>{new Date(user.pushed_at).toDateString()}</b>
        </p>

        <p className="visibility">
          Visibility: <b>{user.visibility}</b>
        </p>

        <p className="Forks">
          Forks: <b>{user.forks_count}</b>
        </p>

        <p className="Star">
          {" "}
          Stars: <b>{user.stargazers_count}</b>
        </p>

        <p className="Wacthing">
          Wacthing: <b>{user.watchers_count}</b>
        </p>

        <p className="issues">
          Open Issues: <b>{user.open_issues}</b>
        </p>

        <p className="language">
          Language: <b>{user.language === null ? "None" : user.language}</b>
        </p>

        <p className="Link">
          View on Git-Hub:{" "}
          <b>
            <Link to={user.html_url}> Visit Site </Link>
          </b>
        </p>
      </div>
      <button className="button">
        <Link to="/">Go back</Link>
      </button>
    </>
  );
}
export default SingleRepo;
