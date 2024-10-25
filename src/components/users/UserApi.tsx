
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "@/components/users/List";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const UserApi: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  <UserList users={users || []} loading={loading} />
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <UserList users={users || []} loading={loading} />
    </>
  );
};

export default UserApi;
