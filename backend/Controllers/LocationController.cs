using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("/locations")]
    public class LocationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public LocationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Location>> GetLocations()
        {
            return await _context.Locations.ToListAsync();
        }

        [HttpGet("{locationID}")]
        public async Task<ActionResult<Location>> GetLocation(long locationID)
        {
            var location = await _context.Locations.FindAsync(locationID);

            if (location == null)
            {
                return NotFound();
            }

            return location;
        }
    }
}
