namespace backend.Models
{
    public class Reservation
    {
        public long Id { get; set; }
        [Required]
        public long UserId { get; set; }
        [Required]
        public long CarId { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public float TotalPrice { get; set; }

        // Navigation properties
        public User User { get; set; }
        public Car Car { get; set; }
    }
}