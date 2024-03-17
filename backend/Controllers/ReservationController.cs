using backend.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("/reservations")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        // TODO: Add an endpoint for getting all reservations

        [HttpPost("create-reservation")]
        public IActionResult CreateReservation([FromBody] ReservationDto data)
        {
            Console.WriteLine($"Received data: {System.Text.Json.JsonSerializer.Serialize(data)}");
            // TODO: Implement reservation creation logic here

            return Ok();
        }
    }
}
    