import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GitPage = () => {
  const params = useParams();
  const [profileImage, setProfileImage] = useState("")
  const [profileUrl, setProfileUrl] = useState("")
  const [followers, setFollowers] = useState(0)
  const [name, setName] = useState("")
  const [repos, setRepos] = useState([])


  console.log("params: ", params);

  useEffect(() => {
    fetch(`https://api.github.com/users/${params.gitUserName}`).then((res) =>
      res.json().then((data) => {
        console.log("data: ", data)
        setProfileImage(data.avatar_url)
        setProfileUrl(data.html_url)
        setFollowers(data.followers)
        setName(data.name)
      })
    );

    fetch(`https://api.github.com/users/${params.gitUserName}/repos`).then((res) =>
      res.json().then((data) => {
        console.log("Repos: ", data)
        setRepos(data)
      })
    );
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl py-32">
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl text-gray-900 font-bold">
            <b>{name}'s</b> Github Repository
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the source code and contribute to the project on Github.
          </p>
          <div className="mt-4">
            <span className="font-medium">Followers:</span>{" "}
            <span className="text-gray-600">{followers}</span>
          </div>
          <a
            href={profileUrl}
            className="mt-4 inline-block bg-orange-700 text-white font-medium rounded-lg px-4 py-2 hover:bg-orange-800"
          >
            View on Github
          </a>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <img
            className="rounded-lg overflow-hidden w-48 border-2 border-slate-200"
            src={
              profileImage ||
              "https://avatars.githubusercontent.com/u/104523634?v=4"
            }
            alt="GitHub Profile"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>Repos</h2>
        
        <ul className="flex flex-col gap-4">
           {
            repos.map(repo => (
                <li key={repo.id} className="border p-4 rounded-lg w-96 hover:shadow-lg hover:scale-105 duration-200">
                  <a href={repo.html_url} className="font-medium text-gray-900">{repo.name}</a>
                </li>
            ))
           }
        </ul>
      </div>
    </div>
  );
};

export default GitPage;
