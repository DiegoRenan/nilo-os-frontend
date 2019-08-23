import axios from 'axios'

export const url = axios.create({
  // baseURL: "http://177.23.191.191:3000/",
  baseURL: "http://localhost:3000/",
  headers: { 'Accept': 'application/vnd.api+json' }
})

export default {
  loadTickets: () => url.get("/v1/tickets"),

  loadCompanies:  () => url.get("/v1/companies"),
  addCompany: (data) => url.post("/v1/companies", data ),
  updateCompany: (data) => url.put(`/v1/companies/${data.data.id}`, data ),
  deleteCompany: (id) => url.delete(`/v1/companies/${id}`),
  getCompany: (id) => url.get(`/v1/companies/${id}`)
}
