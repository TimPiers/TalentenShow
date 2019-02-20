using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Domain.Business.Contracts.Business
{
    public interface IPersonService
    {

        List<Participant> GetParticipants();
        string GenerateEventKey(string eventCode);
        string SaveParticipant(Participant participant, Event eventObj);
    }
}
