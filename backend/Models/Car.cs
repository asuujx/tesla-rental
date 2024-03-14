namespace backend.Models
{
    public class Car
    {
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public long LocationId { get; set; }

        // Navigation property
        public Location Location { get; set; }
    }
}