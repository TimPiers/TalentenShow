using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Locations;
using TalentenShow.Domain.Models.Themes;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Domain.Models.Events
{
    public class Event
    {

        public Event()
        {
            Participants = new List<Participant>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string EventCode { get; set; }
        public int MaxNumberOfParticipants { get; set; }

        public DateTime EntryStartDate { get; set; }
        public DateTime EntryEndDate { get; set; }
        public DateTime EventStartDate { get; set; }
        public DateTime EventEndDate { get; set; }

        public int LocationId { get; set; }
        public Location Location { get; set; }

        public int ThemeId { get; set; }
        public Theme Theme { get; set; }

        public List<Participant> Participants { get; set; }
    }
}
