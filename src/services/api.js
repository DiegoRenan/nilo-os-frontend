import axios from 'axios'
import { loadDepartments } from '../components/screens/departments/departmentsActions';

export let url = axios.create({
  // baseURL: "http://177.23.191.191:3000/",
  baseURL: "http://localhost:3000/",
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
  isTokenValid: (token) => urlHeaders.get('auth/validate_token', token ),

  loadTickets: () => url.get("/v1/tickets", {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }
  ),

  
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

  getEmployee: (id) => url.get(`/v1/employees/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

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

  getDepartment: (id) => url.get(`/v1/departments/${id}`, {
    headers: {
      'Accept': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }),

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
  })


}
