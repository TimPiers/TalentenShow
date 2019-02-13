using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;

namespace TalentenShow.Domain.Models.Locations
{
    public class Location
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }
        public string PostalCode { get; set; }
        public string Place { get; set; }

        public List<Event> Events { get; set; }

    }
}
