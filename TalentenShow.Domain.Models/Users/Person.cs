﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TalentenShow.Domain.Models.Users
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Prefix { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
