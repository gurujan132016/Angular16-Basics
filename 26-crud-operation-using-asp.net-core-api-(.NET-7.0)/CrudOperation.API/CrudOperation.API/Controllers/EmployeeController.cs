using AutoMapper;
using Azure;
using CrudOperation.API.CustomActionFilters;
using CrudOperation.API.Models.Domain;
using CrudOperation.API.Models.DTO;
using CrudOperation.API.Repsitories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CrudOperation.API.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<EmployeeController> _logger;
        private readonly IConfiguration _configuration;
        public EmployeeController(IEmployeeRepository employeeRepository, IMapper mapper, ILogger<EmployeeController> logger, IConfiguration configuration)
        {
           _employeeRepository = employeeRepository;
           _mapper = mapper;
           _logger=logger;
           _configuration=configuration;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            //employee entity domain model
            var employeesDomain = await _employeeRepository.GetAllAsync();
            //map domain model with dtos 
            var employeesDto = _mapper.Map<List<EmployeeDto>>(employeesDomain);
            return Ok(employeesDto);
        }

        [HttpGet]
        [Route("GetById/{id}")]
        [ValidateModel]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            ResponseDto? responseDto = null;
            //employee entity domain model
            var employeeDomain = await _employeeRepository.GetByIdAsync(id);

            if (employeeDomain == null)
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
                            Message=_configuration["EmployeeMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }
            //map domain model with dtos 
            var employeeDto = _mapper.Map<EmployeeDto>(employeeDomain);
            return Ok(employeeDto);
        }

        [HttpPost]
        [Route("Create")]
        [ValidateModel]
        public async Task<IActionResult> Create([FromBody] EmployeeDto employeeDto)
        {
            ResponseDto? responseDto=null;
            //employee entity domain model
            var employeeDomain = _mapper.Map<Employee>(employeeDto);
            employeeDomain = await _employeeRepository.CreateAsync(employeeDomain);
            //map domain model with dtos 
            employeeDto = _mapper.Map<EmployeeDto>(employeeDomain);

            responseDto=new ResponseDto
            {
                Id = employeeDto.Id,
                IsSuccess=true,
                HttpStatusCode=HttpStatusCode.OK,
                Messages=new List<MessagesDto> 
                { 
                    new MessagesDto
                    {
                        Message=_configuration["EmployeeMessages:Created"]
                    }
                }
            };
            return Ok(responseDto);
        }

        [HttpPut]
        [Route("Update/{id}")]
        [ValidateModel]
        public async Task<IActionResult> Update([FromRoute] Guid id,[FromBody] EmployeeDto employeeDto)
        {
            ResponseDto? responseDto = null;
            //employee entity domain model
            var employeeDomain = _mapper.Map<Employee>(employeeDto);
            employeeDomain = await _employeeRepository.UpdateAsync(id, employeeDomain);
            if (employeeDomain == null)
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
                            Message=_configuration["EmployeeMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }

            //map domain model with dtos 
            employeeDto = _mapper.Map<EmployeeDto>(employeeDomain);
            responseDto = new ResponseDto
            {
                Id = employeeDto.Id,
                IsSuccess = true,
                HttpStatusCode = HttpStatusCode.OK,
                Messages = new List<MessagesDto>
                {
                    new MessagesDto
                    {
                        Message=_configuration["EmployeeMessages:Updated"]
                    }
                }
            };
            return Ok(responseDto);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        [ValidateModel]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            ResponseDto? responseDto = null;
            //employee entity domain model
            var employeeDomain = await _employeeRepository.DeleteAsync(id);
            if (employeeDomain == null)
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
                            Message=_configuration["EmployeeMessages:NotFound"]
                        }
                    }
                };
                return Ok(responseDto);
            }
            //map domain model with dtos 
            var employeeDto = _mapper.Map<EmployeeDto>(employeeDomain);
            responseDto = new ResponseDto
            {
                Id = employeeDto.Id,
                IsSuccess = true,
                HttpStatusCode = HttpStatusCode.OK,
                Messages = new List<MessagesDto>
                {
                    new MessagesDto
                    {
                        Message=_configuration["EmployeeMessages:Deleted"]
                    }
                }
            };
            return Ok(responseDto);
        }
    }
}
