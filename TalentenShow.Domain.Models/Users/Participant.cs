using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;

namespace TalentenShow.Domain.Models.Users
{
    public class Participant : Person
    {

        public Participant()
        {
            ParticipatedEvents = new List<Event>();
        }

        public List<Event> ParticipatedEvents { get; set; }

    }
}
