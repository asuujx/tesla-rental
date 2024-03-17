namespace backend.Models
{
    public class Reservation
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string StartLocation { get; set; }
        public DateTime StartDate { get; set; }
        public string EndLocation { get; set; }
        public DateTime EndDate {  get; set; }
        public long CarId { get; set; }
        public float TotalPrice { get; set; }

        // Navigation property
        public Car Car { get; set; }
    }
}