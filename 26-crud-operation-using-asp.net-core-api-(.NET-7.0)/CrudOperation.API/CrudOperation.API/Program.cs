using CrudOperation.API.Data;
using CrudOperation.API.Mappings;
using CrudOperation.API.Middlewares;
using CrudOperation.API.Repsitories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Serilog;
using System.Text.Json.Serialization;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using CrudOperation.API.Models.Domain;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("Logs/Application_Logs.txt",rollingInterval:RollingInterval.Day)
    .MinimumLevel.Information()
    .CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<CrudOperationDbContext>(oprions=>
oprions.UseSqlServer(builder.Configuration.GetConnectionString("CrudOperationConnectionString")));
builder.Services.AddScoped<IEmployeeRepository,EmployeeRepository>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
builder.Services.AddScoped<ITokenRepository, TokenRepository>();

builder.Services.AddIdentityCore<ApplicationUser>()
    .AddRoles<IdentityRole>()
    .AddTokenProvider<DataProtectorTokenProvider<ApplicationUser>>("CrudOperation")
    .AddEntityFrameworkStores<CrudOperationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(oprions =>
{
    oprions.Password.RequireDigit=false;
    oprions.Password.RequireLowercase = false;
    oprions.Password.RequireNonAlphanumeric = false;
    oprions.Password.RequireUppercase = false;
    oprions.Password.RequiredLength = 6;
    oprions.Password.RequiredUniqueChars = 1;
});

builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options=> 
    options.TokenValidationParameters=new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JWt:Issuer"],
        ValidAudience = builder.Configuration["JWt:Audience"],
        IssuerSigningKey=new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["JWt:Key"]))
    });

var app = builder.Build();
var clientUrl= builder.Configuration["ClientUrl:AngularApp"];

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseMiddleware<ExceptionHandlerMiddleware>();
app.UseHttpsRedirection();

app.UseCors(builder =>
          builder.WithOrigins("http://localhost:4200")
          .AllowAnyHeader()
          .AllowAnyMethod());

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
