import { baseUrl } from '../../app/constants/api';

interface IsignIn {
  name?: string;
  email: string;
  password: string;
}

const signIn = async (userData: IsignIn) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  let resUserData;

  if (res.status === 401) {
    resUserData = await res.text();
    throw new Error(resUserData);
  } else {
    resUserData = await res.json();
  }

  if (!res.ok) {
    const messages = resUserData.error.errors
      .map((el: { message: string }) => el.message)
      .join('\n');

    throw new Error(messages);
  }

  return resUserData;
};

export default signIn;
