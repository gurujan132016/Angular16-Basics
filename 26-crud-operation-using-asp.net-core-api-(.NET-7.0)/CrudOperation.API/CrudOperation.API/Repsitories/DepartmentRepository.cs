using CrudOperation.API.Data;
using CrudOperation.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CrudOperation.API.Repsitories
{
    public class DepartmentRepository:IDepartmentRepository
    {
        private readonly CrudOperationDbContext _dbContext;
        public DepartmentRepository(CrudOperationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public async Task<List<Department>> GetAllAsync()
        {
            return await _dbContext.Departments.ToListAsync();
        }
        public async Task<Department?> GetByIdAsync(Guid id)
        {
            return await _dbContext.Departments.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<Department> CreateAsync(Department department)
        {
            await _dbContext.Departments.AddAsync(department);
            await _dbContext.SaveChangesAsync();
            return department;
        }
        public async Task<Department?> UpdateAsync(Guid id, Department department)
        {
            var existingDepartment = await _dbContext.Departments.FirstOrDefaultAsync(x => x.Id == id);
            if (existingDepartment == null)
            {
                return null;
            }
            existingDepartment.Name = department.Name;
            existingDepartment.Description = department.Description;

            await _dbContext.SaveChangesAsync();
            return existingDepartment;
        }

        public async Task<Department?> DeleteAsync(Guid id)
        {
            var existingDepartment = await _dbContext.Departments.FirstOrDefaultAsync(x => x.Id == id);
            if (existingDepartment == null)
            {
                return null;
            }
            _dbContext.Departments.Remove(existingDepartment);
            await _dbContext.SaveChangesAsync();
            return existingDepartment;
        }
    }
}
