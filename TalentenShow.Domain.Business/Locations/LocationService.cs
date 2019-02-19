using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Locations;

namespace TalentenShow.Domain.Business.Locations
{
    public class LocationService : ILocationService
    {

        private ILocationRepository _repository;

        public LocationService(ILocationRepository repository)
        {
            _repository = repository;
        }

        public int DeleteLocation(Location location)
        {
            return _repository.DeleteLocation(location);
        }

        public List<Location> GetAllLocations()
        {
            return _repository.GetAllLocations();
        }

        public int SaveLocation(Location location)
        {
            return _repository.SaveLocation(location);
        }
    }
}
