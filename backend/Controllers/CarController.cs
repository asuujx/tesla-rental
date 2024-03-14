using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("locations/{locationID}/cars")]
    public class CarController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CarController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsInLocation(long locationID)
        {
            var location = await _context.Locations.FindAsync(locationID);
            if (location == null)
            {
                return NotFound();
            }
            var cars = await _context.Cars.Where(car => car.LocationId == locationID).ToListAsync();

            return cars;
        }
    }
}
