namespace backend.DTOs
{
    public class ReservationDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string StartLocation { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public string EndLocation { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public long CarId { get; set; }
        [Required]
        public float TotalPrice { get; set; }
    }
}
