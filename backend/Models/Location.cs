namespace backend.Models
{
    public class Location
    {
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}