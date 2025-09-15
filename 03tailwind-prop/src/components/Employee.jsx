function Employee({ username, role, description }) {
  console.log("username: ", username);
  console.log("role: ", role);
  console.log("description: ", description);

  return (
    <div className="bg-gray-50 w-96 rounded-md p-4 flex flex-col gap-3">
      <span className="text-sm">UserName: {username}</span>
      <span className="text-xs">role: {role}</span>
      <p className="text-sm">Description: {description}</p>
    </div>
  );
}

export default Employee;
