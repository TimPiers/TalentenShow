using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Domain.Business.Contracts.Repository
{
    public interface IPersonRepository
    {

        List<Participant> GetParticipants();
        string SaveParticipant(Participant participant, Event eventObj, string code);

    }
}
