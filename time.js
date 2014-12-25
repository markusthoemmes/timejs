/**
 * A library to handle time without an attachement to a date.
 *
 * @author Markus Thömmes <markusthoemmes@me.com>
 * @param {string=} string a string of the format hh:mm:ss
 * @return {time} a time-object
 */
var time = function(string) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  if(string !== undefined) {
    var matcher = /(\d?\d):(\d\d):?(\d\d)?/g;
    var matches = matcher.exec(string);
    if(matches !== null) {
      hours = parseInt(matches[1], 10);
      if(hours >= 24) {
        hours = 0;
      }

      minutes = parseInt(matches[2], 10);
      if(minutes >= 60) {
        minutes = 0;
      }

      seconds = parseInt(matches[3], 10);
      if(isNaN(seconds) || seconds >= 60) {
        seconds = 0;
      }
    }
  }

  var object = {
    /**
     * getter and setter for the hours of the object
     *
     * @param {number} paramHours value of hours to set
     * @return {number} if no parameter is set, the hours of the object are returned
     */
    hours: function(paramHours) {
      if(paramHours === undefined) {
        return hours;
      }
      else {
        if(paramHours >= 0 && paramHours <= 23) {
          hours = paramHours;
        }
        else {
          hours = 0;
        }
        return object;
      }
    },

    /**
     * getter and setter for the minutes of the object
     *
     * @param {number} paramMinutes value of minutes to set
     * @return {number} if no parameter is set, the minutes of the object are returned
     */
    minutes: function(paramMinutes) {
      if(paramMinutes === undefined) {
        return minutes;
      }
      else {
        if(paramMinutes >= 0 && paramMinutes <= 59) {
          minutes = paramMinutes;
        }
        else {
          minutes = 0;
        }
        return object;
      }
    },

    /**
     * getter and setter for the seconds of the object
     *
     * @param {number} paramSeconds value of seconds to set
     * @return {number} if no parameter is set, the seconds of the object are returned
     */
    seconds: function(paramSeconds) {
      if(paramSeconds === undefined) {
        return seconds;
      }
      else {
        if(paramSeconds >= 0 && paramSeconds <= 59) {
          seconds = paramSeconds;
        }
        else {
          seconds = 0;
        }
        return object;
      }
    },

    /**
     * Adds a given value to the time represented by the object
     * 
     * @param {number} value the value to add
     * @param {string} unit the unit of the value
     */
    add: function(value, unit) {
      if(value === 0) {
        return object;
      }
      if(unit === 'hours') {
        hours = hours + value % 24;

        // floating point values (like 1.5hours)
        var extraMinutes = (hours%1)*60;
        object.add(extraMinutes, 'minutes');

        // remove everything after the dot
        hours = Math.floor(hours);

        if(hours >= 24) {
          hours -= 24;
        }
      }
      else if(unit === 'minutes') {
        var newHours = Math.floor(value/60);
        var remainingMinutes = value - (newHours * 60);

        // floating point values (like 1.5 minutes)
        var extraSeconds = (remainingMinutes%1)*60;
        object.add(extraSeconds, 'seconds');

        object.add(newHours, 'hours');
        minutes += remainingMinutes;

        // remove everything after the dot
        minutes = Math.floor(minutes);
        if(minutes >= 60) {
          minutes -= 60;
          object.add(1, 'hours');
        }
      }
      else if(unit === 'seconds') {
        var newMinutes = Math.floor(value/60);

        // Math.floor to remove floating point values
        var remainingSeconds = Math.floor(value - (newMinutes * 60));

        object.add(newMinutes, 'minutes');
        seconds += remainingSeconds;
        if(seconds >= 60) {
          seconds -= 60;
          object.add(1, 'minutes');
        }
      }
      return object;
    },

    /**
     * Returns wether this object is after another
     *
     * @param {time} a time-object to be compared with
     * @return {boolean} `true` if the object is after than the other object
     */
    isAfter: function(other) {
      return (object.hours() > other.hours()) || 
        (object.hours() === other.hours() && object.minutes() > other.minutes()) ||
        (object.hours() === other.hours() && object.minutes() === other.minutes() && object.seconds() > other.seconds());
    },

    /**
     * Returns wether this object's time is before than another
     *
     * @param {time} a time-object to be compared with
     * @return {boolean} `true` if the object is before than the other object
     */
    isBefore: function(other) {
      return (object.hours() < other.hours()) || 
        (object.hours() === other.hours() && object.minutes() < other.minutes()) ||
        (object.hours() === other.hours() && object.minutes() === other.minutes() && object.seconds() < other.seconds());
    },

    /**
     * Returns wether this object's time is equal to another
     *
     * @param {time} a time-object to be compared with
     * @return {boolean} `true` if the object is equal to the other object
     */
    isSame: function(other) {
      return (object.hours() === other.hours()) && (object.minutes() === other.minutes()) && (object.seconds() === other.seconds());
    },
    
    /**
     * Returns a string of the format hh:mm:ss
     *
     * @return {string} string of the format hh:mm:ss
     */
    toString: function() {
      var stringHours = '' + hours;
      if(stringHours.length === 1) {
        stringHours = '0'+hours;
      }

      var stringMinutes = '' + minutes;
      if(stringMinutes.length === 1) {
        stringMinutes = '0'+minutes;
      }

      var stringSeconds = '' + seconds;
      if(stringSeconds.length === 1) {
        stringSeconds = '0'+seconds;
      }

      return stringHours + ':' + stringMinutes + ':' + stringSeconds;
    }
  };
  return object;
};