using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace CrudOperation.API.Models.Domain
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string? Middlename { get; set; }
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
