'use strict';

angular.
  module('newsfeed').
  component('newsfeed', {
    templateUrl: 'newsfeed/newsfeed.template.html',
    controller: function NewsfeedController() {
      this.newsfeed = [
        {
          details: 'The new Global Business Services portal is now live. This effort presents users with a unified web interface for employees to access information and resources related to HT, IT, and Procurement. The n',
          headline: 'GBS Portal Now Live!',
          location: 'General',
          time: '7d ago'
        }, {
          details: 'The new Global Business Services portal is now live. This effort presents users with a unified web interface for employees to access information and resources related to HT, IT, and Procurement. The n',
          headline: 'GBS Portal Now Live!',
          location: 'General',
          time: '15d ago'
        }, {
          details: 'The new Global Business Services portal is now live. This effort presents users with a unified web interface for employees to access information and resources related to HT, IT, and Procurement. The n',
          headline: 'GBS Portal Now Live!',
          location: 'General',
          time: '24d ago'
        }
      ];
    }
  });
