using System.ComponentModel.DataAnnotations;

namespace CrudOperation.API.Models.Domain
{
    public class Department
    {
        [Key]
        public Guid Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Description { get; set; }
    }
}
