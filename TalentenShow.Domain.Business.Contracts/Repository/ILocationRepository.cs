using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Locations;

namespace TalentenShow.Domain.Business.Contracts.Repository
{
    public interface ILocationRepository
    {

        List<Location> GetAllLocations();

    }
}
