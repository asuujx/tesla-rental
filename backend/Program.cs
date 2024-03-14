var builder = WebApplication.CreateBuilder(args);

// Database connection
var connectionString = builder.Configuration.GetConnectionString("ApplicationDbConnectionString");
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add controllers to the services
builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

// Routing and map controllers
app.UseRouting();
app.MapControllers();

app.Run();