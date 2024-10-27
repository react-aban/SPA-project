import { useParams } from "umi";
import { useState, useEffect } from "react";
import UserList from "@/components/User";
import { User } from "@/types/UserTypes";
import { fetchUsers } from "@/api/userApi"; 

const UserApi: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userId } = useParams<{ userId: string | undefined }>();

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null); 

      try {
        const usersData = await fetchUsers(userId); 
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    getUsers();
  }, [userId]);

  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <UserList users={users} loading={loading} />
    </>
  );
};

export default UserApi;
