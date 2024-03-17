namespace backend.Models
{
    public class Car
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public long LocationId { get; set; }

        // Navigation property
        public Location Location { get; set; }
    }
}