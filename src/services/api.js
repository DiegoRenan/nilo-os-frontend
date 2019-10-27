import axios from 'axios'

export let url = axios.create({
  // baseURL: "http://177.23.191.191:3000/",
  baseURL: "http://localhost:3000/"
})

export let urlHeaders = axios.create({
  // baseURL: "http://177.23.191.191:3000/",
  baseURL: "http://localhost:3000/",
  headers: {
    'Accept': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
  }
})

export default {
  isTokenValid: (token) => urlHeaders.get('auth/validate_token', token),

  addTicket: (data) => url.post("/v1/tickets", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  loadTickets: () => url.get("/v1/tickets", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  loadTicketsUser: (user_id) => url.get(`/v1/employees/${user_id}/tickets`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  getTicket: (id) => url.get(`/v1/tickets/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteTicket: (id) => url.delete(`/v1/tickets/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  //######################  COMPANY ##############################


  loadCompanies: () => url.get("/v1/companies", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addCompany: (data) => url.post("/v1/companies", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  updateCompany: (data) => url.put(`/v1/companies/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  deleteCompany: (id) => url.delete(`/v1/companies/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  getCompany: (id) => url.get(`/v1/companies/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  getCompanyDepartments: (companyId) => url.get(`/v1/companies/${companyId}/departments`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  //######################  EMPLOYEE ############################

  loadEmployees: () => url.get("/v1/employees", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteEmployee: (id) => url.delete(`/v1/employees/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addEmployee: (data) => url.post("/v1/employees", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getEmployee: (id) => url.get(`/v1/employees/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  updateEmployee: (data) => url.put(`/v1/employees/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getEmployeeCompany: (employeeId) => url.get(`/v1/employees/${employeeId}/company`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  //######################  DEPARTMENT ##############################

  loadDepartments: () => url.get("/v1/departments", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteDepartment: (id) => url.delete(`/v1/departments/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addDepartment: (data) => url.post("/v1/departments", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  updateDepartment: (data) => url.put(`/v1/departments/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getDepartment: (id) => url.get(`/v1/departments/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  getDepartmentCompany: (departmentId) => url.get(`/v1/departments/${departmentId}/company`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  getDepartmentSectors: (departmentId) => url.get(`/v1/departments/${departmentId}/sectors`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  //######################  SECTORS ##############################

  loadSectors: () => url.get("/v1/sectors", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteSector: (id) => url.delete(`/v1/sectors/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addSector: (data) => url.post("/v1/sectors", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getSector: (id) => url.get(`/v1/sectors/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  updateSector: (data) => url.put(`/v1/sectors/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  //######################  SECTORS ##############################

  loadStatus: () => url.get("/v1/ticket_statuses", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteStatus: (id) => url.delete(`/v1/ticket_statuses/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addStatus: (data) => url.post("/v1/ticket_statuses", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getStatus: (id) => url.get(`/v1/ticket_statuses/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  updateStatus: (data) => url.put(`/v1/ticket_statuses/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),


  //######################  TYPES ##############################

  loadTypes: () => url.get("/v1/ticket_types", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  deleteType: (id) => url.delete(`/v1/ticket_types/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addType: (data) => url.post("/v1/ticket_types", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  getType: (id) => url.get(`/v1/ticket_types/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  updateType: (data) => url.put(`/v1/ticket_types/${data.data.id}`, data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  //######################  TYPES ##############################

  getComments: (ticketId) => url.get(`/v1/tickets/${ticketId}/comments`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  //######################  RESPONSIBLES ##############################

  getTicketResponsibles: (id) => url.get(`/v1/tickets/${id}/responsibles`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  removeResponsible: (id) => url.delete(`/v1/responsibles/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

  addResponsible: (data) => url.post("/v1/responsibles", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  addComments: (data) => url.post("/v1/comments", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  loadPriorities: () => url.get("/v1/priorities", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }
  ),

  closeTicket: (data) => url.post("/v1/close_ticket", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  aproveTicket: (data) => url.post("/v1/aprove_ticket", data,
    {
      headers: {
        'Accept': 'application/json',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  ),

  //######################  EMPLOYEE AVATAR ##############################
  
  uploadAvatar: (data, id) => url.post(`/v1/employees/${id}/avatar`, data,
    {
      headers: {
        'Accept': 'application/json',
        'content-type': 'multipart/form-data',
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }
  )

}
