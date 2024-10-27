import { useParams } from "umi";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "@/pages/users/List";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const UserApi: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useParams<{ userId: string | undefined }>();

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        let response;
        if (userId) {
          response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          setUsers([response.data]);
        } else {
          response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
          );
          setUsers(response.data);
        }
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userId]);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <>
          {" "}
          <p>Loading...</p>
          <UserList users={users} loading={loading} />
        </>
      ) : (
        <UserList users={users} loading={loading} />
      )}
    </>
  );
};

export default UserApi;
