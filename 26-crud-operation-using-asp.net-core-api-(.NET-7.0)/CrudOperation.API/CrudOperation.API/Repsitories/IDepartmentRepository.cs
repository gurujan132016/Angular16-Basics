using CrudOperation.API.Models.Domain;

namespace CrudOperation.API.Repsitories
{
    public interface IDepartmentRepository
    {
        Task<List<Department>> GetAllAsync();
        Task<Department?> GetByIdAsync(Guid id);
        Task<Department> CreateAsync(Department department);
        Task<Department?> UpdateAsync(Guid id, Department department);
        Task<Department?> DeleteAsync(Guid id);
    }
}
