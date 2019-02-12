using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TalentenShow.Repository
{
    public class TalentenShowContext : DbContext
    {

        public TalentenShowContext()
            : base(@"Data Source=(LocalDb)\SoftwareDevelopment;Initial Catalog=TalentenShow;User Id=DevUser;Password=root;MultipleActiveResultSets=true;Connect Timeout=60;")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Domain.Models.News.News>().ToTable("News", "TalentShow");
        }

    }
}
