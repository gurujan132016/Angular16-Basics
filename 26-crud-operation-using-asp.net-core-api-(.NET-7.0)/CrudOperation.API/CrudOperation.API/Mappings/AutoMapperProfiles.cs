using AutoMapper;
using CrudOperation.API.Models.Domain;
using CrudOperation.API.Models.DTO;

namespace CrudOperation.API.Mappings
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Employee,EmployeeDto>().ReverseMap();
            CreateMap<Department, DepartmentDto>().ReverseMap();
        }
    }
}
