import Api from "app/app/fetch/axiosInstance";
import { signOut } from 'next-auth/react'
import { toastnotify } from "../Toastserviceprovider";

async function authenticate(username: string, password: string): Promise<any | null> {
  return new Promise(
    async (resolve, reject) => {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL
      try {
        if (username == null && password == null) throw new Error("username and password are required");
        const response = await fetch(baseURL + "/api/v1/client/auth/login", {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        resolve(data);
      } catch (error) {
        return reject(error)
      }
    }
  );

}

export const authService = {
  authenticate,
};

export const handleSignOut = async () => {
  try {
    await signOut({
      redirect: false
    })
    window.location.href = "/"
  } catch (error) {
    toastnotify("Failed to sign out")
  } finally {

  }
}