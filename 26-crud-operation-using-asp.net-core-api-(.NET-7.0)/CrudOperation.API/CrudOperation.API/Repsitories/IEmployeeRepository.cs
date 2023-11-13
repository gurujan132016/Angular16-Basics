using CrudOperation.API.Models.Domain;

namespace CrudOperation.API.Repsitories
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetAllAsync();
        Task<Employee?> GetByIdAsync(Guid id);
        Task<Employee> CreateAsync(Employee employee);
        Task<Employee?> UpdateAsync(Guid id, Employee employee);
        Task<Employee?> DeleteAsync(Guid id);

    }
}
