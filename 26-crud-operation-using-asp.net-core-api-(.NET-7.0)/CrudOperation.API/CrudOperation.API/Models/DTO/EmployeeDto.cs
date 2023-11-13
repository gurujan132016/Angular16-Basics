using System.ComponentModel.DataAnnotations;

namespace CrudOperation.API.Models.DTO
{
    public class EmployeeDto
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string? MiddleName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        [StringLength(50)]
        public string Email { get; set; }
        [StringLength(10)]
        public string Mobile { get; set; }
        [StringLength(50)]
        public string Company { get; set; }
        public long Salary { get; set; }
        [StringLength(50)]
        public string Country { get; set; }
        [StringLength(50)]
        public string City { get; set; }
        [StringLength(50)]
        public string State { get; set; }
    }
}
