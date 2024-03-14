namespace backend.Data
{
   public class ApplicationDbContext : DbContext 
   {
      public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
      public DbSet<Car> Cars { get; set; }
      public DbSet<Location> Locations { get; set; }
      public DbSet<Reservation> Reservations { get; set; }
      public DbSet<User> Users { get; set; }
   }
}