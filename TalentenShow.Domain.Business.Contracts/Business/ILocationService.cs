using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Locations;

namespace TalentenShow.Domain.Business.Contracts.Business
{
    public interface ILocationService
    {

        List<Location> GetAllLocations();

    }
}
