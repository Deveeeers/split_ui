import axios from 'axios';

// Base URL for your backend API
const API_BASE_URL = "http://localhost:5000/api";

export const api = {
  createUser: (data) => axios.post(`${API_BASE_URL}/users`, data),
  getAllUsers: () => axios.get(`${API_BASE_URL}/users`),
  createGroup: (data) => axios.post(`${API_BASE_URL}/groups`, data),
  getGroups: () => axios.get(`${API_BASE_URL}/groups`),
  addExpense: (data) => axios.post(`${API_BASE_URL}/expenses`, data),
  getExpenses: (groupId) => axios.get(`${API_BASE_URL}/expenses/${groupId}`),
};
