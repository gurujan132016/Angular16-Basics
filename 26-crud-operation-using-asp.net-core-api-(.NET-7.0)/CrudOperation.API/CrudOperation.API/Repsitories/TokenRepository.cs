using CrudOperation.API.Models.Domain;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CrudOperation.API.Repsitories
{
    public class TokenRepository:ITokenRepository
    {
        private readonly IConfiguration _configuration;

        public TokenRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string CreateJWTToken(ApplicationUser user, List<string> roles)
        {
            var claims=new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Email, user.Email));

            foreach(var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            var key=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var credential=new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            var token=new JwtSecurityToken(
                _configuration["JWT:Issuer"],
                _configuration["JWT:Audience"],
                claims,
                expires:DateTime.Now.AddDays(1),
                signingCredentials:credential);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
