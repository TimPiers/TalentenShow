using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Locations;
using TalentenShow.Domain.Models.Themes;

namespace TalentenShow.Repository
{
    public class TalentenShowContext : DbContext
    {

        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<Location> Locations { get; set; }

        public TalentenShowContext()
            : base(@"Data Source=(LocalDb)\SoftwareDevelopment;Initial Catalog=TalentenShow;User Id=DevUser;Password=root;MultipleActiveResultSets=true;Connect Timeout=60;")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Domain.Models.News.News>().ToTable("News", "TalentShow");
            modelBuilder.Entity<Location>().ToTable("Locations", "Admin");
            modelBuilder.Entity<Theme>().ToTable("Themes", "Admin");
            modelBuilder.Entity<Event>().ToTable("Events", "TalentShow");

            //modelBuilder.Entity<Event>()
            //    .HasRequired(e => e.Location)
            //    .WithMany(l => l.Events)
            //    .HasForeignKey<int>(e => e.LocationId);
        }

    }
}
