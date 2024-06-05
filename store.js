import { reactive } from 'vue';
import {
  saveUsersToLocalStorage,
  getUsersFromLocalStorage,
  saveCurrentUserToLocalStorage,
  getCurrentUserFromLocalStorage,
  removeCurrentUserFromLocalStorage,
  downloadUsersAsTextFile,
} from './storage';

const initialUsers = process.client ? getUsersFromLocalStorage() : [];
const initialCurrentUser = process.client ? getCurrentUserFromLocalStorage() : null;

export const store = reactive({
  users: initialUsers,
  currentUser: initialCurrentUser,
});

export const addUser = (user) => {
  store.users.push(user);
  saveUsersToLocalStorage(store.users);
  downloadUsersAsTextFile(store.users);
};

export const loginUser = (user) => {
  store.currentUser = user;
  saveCurrentUserToLocalStorage(user);
};

export const logoutUser = () => {
  store.currentUser = null;
  removeCurrentUserFromLocalStorage();
};

export const getUsers = () => {
  return store.users;
};
