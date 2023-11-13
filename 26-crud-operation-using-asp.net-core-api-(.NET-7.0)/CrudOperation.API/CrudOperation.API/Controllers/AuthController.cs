using CrudOperation.API.Models.Domain;
using CrudOperation.API.Models.DTO;
using CrudOperation.API.Repsitories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CrudOperation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly ITokenRepository _tokenRepository;
        public AuthController(UserManager<ApplicationUser> userManager, IConfiguration configuration, ITokenRepository tokenRepository)
        {
            _userManager = userManager;
            _configuration = configuration;
            _tokenRepository = tokenRepository;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto registerRequestDto)
        {
            ResponseDto? responseDto = null;

            var identityUser = new ApplicationUser
            {
                UserName = registerRequestDto.Username,
                Email = registerRequestDto.Username,
                FirstName = registerRequestDto.FirstName,
                LastName = registerRequestDto.LastName
            };

            var identityResult = await _userManager.CreateAsync(identityUser, registerRequestDto.Password);
            if (identityResult.Succeeded)
            {
                //Add roles to this user
                if (registerRequestDto.Roles != null && registerRequestDto.Roles.Any())
                {
                    identityResult = await _userManager.AddToRolesAsync(identityUser, registerRequestDto.Roles);

                    if (identityResult.Succeeded)
                    {
                        responseDto = new ResponseDto
                        {
                            IsSuccess = true,
                            HttpStatusCode = HttpStatusCode.OK,
                            Messages = new List<MessagesDto>
                            {
                                new MessagesDto
                                {
                                    Message=_configuration["UserMessages:Created"]
                                }
                            }
                        };
                        return Ok(responseDto);
                    }
                }
            }

            responseDto = new ResponseDto
            {
                IsSuccess = false,
                HttpStatusCode = HttpStatusCode.BadRequest,
                Messages = new List<MessagesDto>
                 {
                     new MessagesDto
                     {
                        Message=_configuration["UserMessages:GeneralError"]
                     }
                }

            };
            return BadRequest(responseDto);
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO loginRequestDTO)
        {
            ResponseDto? responseDto = null;
            LoginResponseDTO? loginResponseDto = null;
            var user = await _userManager.FindByEmailAsync(loginRequestDTO.Username);
            if (user != null)
            {
                var checkPasswordResult = await _userManager.CheckPasswordAsync(user, loginRequestDTO.Password);
                if (checkPasswordResult)
                {
                    var roles=await _userManager.GetRolesAsync(user);
                    if (roles != null)
                    {
                       var jwtToken = _tokenRepository.CreateJWTToken(user, roles.ToList());
                       loginResponseDto=new LoginResponseDTO
                       {
                           JwtToken = jwtToken
                       };
                       return Ok(loginResponseDto);
                    }
                }
            }
            responseDto = new ResponseDto
            {
                IsSuccess = false,
                HttpStatusCode = HttpStatusCode.BadRequest,
                Messages = new List<MessagesDto>
                 {
                     new MessagesDto
                     {
                        Message=_configuration["UserMessages:UsernamePasswordError"]
                     }
                }

            };
            return BadRequest(responseDto);
        }
    }


}
