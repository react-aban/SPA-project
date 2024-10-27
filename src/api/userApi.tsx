import axios from "axios";
import { User } from "@/types/UserTypes";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (userId?: string): Promise<User[]> => {
  try {
    const response = userId
      ? await axios.get<User>(`${API_URL}/${userId}`)
      : await axios.get<User[]>(API_URL);

    return userId ? [response.data] : response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "An error occurred while fetching users."
    );
  }
};
