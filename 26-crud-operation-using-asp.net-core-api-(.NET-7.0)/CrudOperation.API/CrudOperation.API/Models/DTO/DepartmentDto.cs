using System.ComponentModel.DataAnnotations;

namespace CrudOperation.API.Models.DTO
{
    public class DepartmentDto
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Description { get; set; }
    }
}
