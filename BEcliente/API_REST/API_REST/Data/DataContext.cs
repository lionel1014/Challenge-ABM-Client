using API_REST.Models;
using Microsoft.EntityFrameworkCore;

namespace API_REST.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(connectionString: @"Data Source=NICK-PC;Initial Catalog=BP4Challenge; Integrated Security=True; TrustServerCertificate=True;");
            //Integrated Security=True; TrustServerCertificate=True;
        }

        public DbSet<Cliente> Cliente { get; set; }
    }
}
