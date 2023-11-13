using CrudOperation.API.Models.Domain;

namespace CrudOperation.API.Repsitories
{
    public interface ITokenRepository
    {
        string CreateJWTToken(ApplicationUser user, List<string> roles);
    }
}
