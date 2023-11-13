using CrudOperation.API.Models.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CrudOperation.API.Data
{
    public class CrudOperationDbContext: IdentityDbContext<ApplicationUser>
    {
        public CrudOperationDbContext(DbContextOptions dbContextOptions):base(dbContextOptions) 
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var readerRoleId= "43b875d4-c5f2-429e-af06-dd7265fead5e";
            var writerRoleId= "08f854ef-f494-43c8-9d49-eda1f0bb6ba6";

            var roles =new List<IdentityRole> 
            { 
                new IdentityRole
                {
                    Id = readerRoleId,
                    ConcurrencyStamp=readerRoleId,
                    Name="Reader",
                    NormalizedName="Reader".ToUpper()
                },
                new IdentityRole
                {
                    Id = writerRoleId,
                    ConcurrencyStamp=writerRoleId,
                    Name="Writer",
                    NormalizedName="Writer".ToUpper()
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
