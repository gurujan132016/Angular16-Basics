using CrudOperation.API.Data;
using CrudOperation.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CrudOperation.API.Repsitories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly CrudOperationDbContext _dbContext;
        public EmployeeRepository(CrudOperationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<List<Employee>> GetAllAsync()
        {
            return await _dbContext.Employees.ToListAsync();
        }
        public async Task<Employee?> GetByIdAsync(Guid id)
        {
            return await _dbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<Employee> CreateAsync(Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await _dbContext.Employees.AddAsync(employee);
            await _dbContext.SaveChangesAsync();
            return employee;
        }
        public async Task<Employee?> UpdateAsync(Guid id,Employee employee)
        {
            var existingEmployee=await _dbContext.Employees.FirstOrDefaultAsync(x=>x.Id == id);
            if (existingEmployee==null) 
            {
                return null;
            }
            existingEmployee.FirstName=employee.FirstName;
            existingEmployee.Middlename = employee.Middlename;
            existingEmployee.LastName = employee.LastName;
            existingEmployee.Email = employee.Email;
            existingEmployee.Mobile = employee.Mobile;
            existingEmployee.Company = employee.Company;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.Country = employee.Country;
            existingEmployee.State = employee.State;
            existingEmployee.City = employee.City;

            await _dbContext.SaveChangesAsync();
            return existingEmployee;
        }

        public async Task<Employee?> DeleteAsync(Guid id)
        {
            var existingEmployee = await _dbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEmployee == null)
            {
                return null;
            }
            _dbContext.Employees.Remove(existingEmployee); 
            await _dbContext.SaveChangesAsync();
            return existingEmployee;
        }
    }
}
