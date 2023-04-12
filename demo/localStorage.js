// localStorage.js - Module for handling local storage
export function saveToLocalStorage(key, value) {
  // Save data to local storage
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  // Retrieve data from local storage
  return JSON.parse(localStorage.getItem(key));
}

export function removeFromLocalStorage(key) {
  // Remove data from local storage
  localStorage.removeItem(key);
}
