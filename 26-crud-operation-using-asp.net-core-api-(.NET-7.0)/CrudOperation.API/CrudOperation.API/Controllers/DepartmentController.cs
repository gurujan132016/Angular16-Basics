using AutoMapper;
using CrudOperation.API.CustomActionFilters;
using CrudOperation.API.Models.Domain;
using CrudOperation.API.Models.DTO;
using CrudOperation.API.Repsitories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CrudOperation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<EmployeeController> _logger;
        private readonly IConfiguration _configuration;
        public DepartmentController(IDepartmentRepository departmentRepository, IMapper mapper, ILogger<EmployeeController> logger, IConfiguration configuration)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAll")]
        [Authorize(Roles ="Reader")]
        public async Task<IActionResult> GetAll()
        {
            //department entity domain model
            var departmentDomain = await _departmentRepository.GetAllAsync();
            //map domain model with dtos 
            var departmentDto = _mapper.Map<List<DepartmentDto>>(departmentDomain);
            return Ok(departmentDto);
        }

        [HttpGet]
        [Route("GetById/{id}")]
        [ValidateModel]
        [Authorize(Roles = "Reader")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            ResponseDto? responseDto = null;
            //department entity domain model
            var departmentDomain = await _departmentRepository.GetByIdAsync(id);

            if (departmentDomain == null)
            {
                responseDto = new ResponseDto
                {
                    Id = id,
                    IsSuccess = false,
                    HttpStatusCode = HttpStatusCode.NotFound,
                    Messages = new List<MessagesDto>
                    {
                        new MessagesDto
                        {
                            Message=_configuration["DepartmentMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }
            //map domain model with dtos 
            var departmentDto = _mapper.Map<DepartmentDto>(departmentDomain);
            return Ok(departmentDto);
        }

        [HttpPost]
        [Route("Create")]
        [ValidateModel]
        [Authorize(Roles = "Writer")]
        public async Task<IActionResult> Create([FromBody] DepartmentDto departmentDto)
        {
            ResponseDto? responseDto = null;
            //department entity domain model
            var departmentDomain = _mapper.Map<Department>(departmentDto);
            departmentDomain = await _departmentRepository.CreateAsync(departmentDomain);
            //map domain model with dtos 
            departmentDto = _mapper.Map<DepartmentDto>(departmentDomain);

            responseDto = new ResponseDto
            {
                Id = departmentDto.Id,
                IsSuccess = true,
                HttpStatusCode = HttpStatusCode.OK,
                Messages = new List<MessagesDto>
                {
                    new MessagesDto
                    {
                        Message=_configuration["DepartmentMessages:Created"]
                    }
                }
            };
            return Ok(responseDto);
        }

        [HttpPut]
        [Route("Update/{id}")]
        [ValidateModel]
        [Authorize(Roles = "Writer")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] DepartmentDto departmentDto)
        {
            ResponseDto? responseDto = null;
            //department entity domain model
            var departmentDomain = _mapper.Map<Department>(departmentDto);
            departmentDomain = await _departmentRepository.UpdateAsync(id, departmentDomain);
            if (departmentDomain == null)
            {
                responseDto = new ResponseDto
                {
                    Id = id,
                    IsSuccess = false,
                    HttpStatusCode = HttpStatusCode.NotFound,
                    Messages = new List<MessagesDto>
                    {
                        new MessagesDto
                        {
                            Message=_configuration["DepartmentMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }

            //map domain model with dtos 
            departmentDto = _mapper.Map<DepartmentDto>(departmentDomain);
            responseDto = new ResponseDto
            {
                Id = departmentDto.Id,
                IsSuccess = true,
                HttpStatusCode = HttpStatusCode.OK,
                Messages = new List<MessagesDto>
                {
                    new MessagesDto
                    {
                        Message=_configuration["DepartmentMessages:Updated"]
                    }
                }
            };
            return Ok(responseDto);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        [ValidateModel]
        [Authorize(Roles = "Writer")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            ResponseDto? responseDto = null;
            //department entity domain model
            var departmentDto = await _departmentRepository.DeleteAsync(id);
            if (departmentDto == null)
            {
                responseDto = new ResponseDto
                {
                    Id = id,
                    IsSuccess = false,
                    HttpStatusCode = HttpStatusCode.NotFound,
                    Messages = new List<MessagesDto>
                    {
                        new MessagesDto
                        {
                            Message=_configuration["DepartmentMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }
            //map domain model with dtos 
            var departmenDto = _mapper.Map<Department>(departmentDto);
            responseDto = new ResponseDto
            {
                Id = departmenDto.Id,
                IsSuccess = true,
                HttpStatusCode = HttpStatusCode.OK,
                Messages = new List<MessagesDto>
                {
                    new MessagesDto
                    {
                        Message=_configuration["DepartmentMessages:Deleted"]
                    }
                }
            };
            return Ok(responseDto);
        }
    }
}
