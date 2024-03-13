namespace backend.Models
{
    public class Reservation
    {
      public int Id { get; set; }
      public int UserId { get; set; }
      public int CarId { get; set; }
      public string StartDate { get; set; }
      public string EndDate { get; set; }
      public float TotalPrice { get; set; }
    }
}