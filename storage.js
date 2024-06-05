export const saveUsersToLocalStorage = (users) => {
  if (process.client) {
    localStorage.setItem('users', JSON.stringify(users));
  }
};

export const getUsersFromLocalStorage = () => {
  if (process.client) {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
  return [];
};

export const saveCurrentUserToLocalStorage = (user) => {
  if (process.client) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
};

export const getCurrentUserFromLocalStorage = () => {
  if (process.client) {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const removeCurrentUserFromLocalStorage = () => {
  if (process.client) {
    localStorage.removeItem('currentUser');
  }
};

export const downloadUsersAsTextFile = (users) => {
  if (process.client) {
    const userText = users.map(user => `Usuario: ${user.username}, Email: ${user.email}`).join('\n');
    const blob = new Blob([userText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
};
