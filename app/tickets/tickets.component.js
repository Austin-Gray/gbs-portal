'use strict';

angular.
  module('tickets').
  component('tickets', {
    templateUrl: 'tickets/tickets.template.html',
    controller: function TicketsController() {
      this.tickets = [
        {
          details: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
          id: 'REQ0078372',
          time: '13h ago',
        }, {
          details: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
          id: 'REQ0078371',
          time: '7d ago',
        }, {
          details: '3 requested items',
          id: 'REQ0078333',
          time: '17d ago',
        }
      ];
    }
  });
