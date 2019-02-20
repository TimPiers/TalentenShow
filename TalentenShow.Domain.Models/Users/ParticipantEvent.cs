using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;

namespace TalentenShow.Domain.Models.Users
{
    public class ParticipantEvent
    {

        public int Id { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public int ParticipantId { get; set; }
        public Participant Participant { get; set; }
        public string Code { get; set; }

    }
}
