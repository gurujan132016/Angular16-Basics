using System.Net;

namespace CrudOperation.API.Models.DTO
{
    public class ResponseDto
    {
        public Guid Id { get; set; }

        public List<MessagesDto> Messages { get; set; }
        public bool IsSuccess { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
    }
}
