timejs
======

A library to handle time without an attachement to a date.

# Documentation

## Usage
To use the library, create an object using `time()`. It returns an object containing the methods documented under [Methods](#methods).

## Constructor

### time([string])
A library to handle time without an attachement to a date.

###### Parameters
1. **string** (*string*) a string of the format hh:mm:ss

###### Return
(*time*) a time-object

## Methods

### hours([paramHours])
getter and setter for the hours of the object

###### Parameters
1. **paramHours** (*number*) value of hours to set

###### Return
(*number*) if no parameter is set, the hours of the object are returned

---

### minutes([paramMinutes])
getter and setter for the minutes of the object

###### Parameters
1. **paramMinutes** (*number*) value of minutes to set

###### Return
(*number*) if no parameter is set, the minutes of the object are returned

---

### seconds([paramSeconds])
getter and setter for the seconds of the object

###### Parameters
1. **paramSeconds** (*number*) value of seconds to set

###### Return
(*number*) if no parameter is set, the seconds of the object are returned

---

### add(value, unit)
Adds a given value to the time represented by the object

###### Parameters
1. **value** (*number*) the value to add
2. **unit** (*string*) the unit of the value

###### Return
(*number*) if no parameter is set, the minutes of the object are returned

---

### isGreaterThan(other)
Returns wether this object is greater than another

###### Parameters
1. **other** (*time*) a time-object to be compared with

###### Return
(*boolean*) `true` if the object is greater than the other object

---

### isLessThan(other)
Returns wether this object is less than another

###### Parameters
1. **other** (*time*) a time-object to be compared with

###### Return
(*boolean*) `true` if the object is less than the other object

---

### isEqualTo(other)
Returns wether this object is equal to another

###### Parameters
1. **other** (*time*) a time-object to be compared with

###### Return
(*boolean*) `true` if the object is equal to the other object

---

### toString()
Returns a string of the format hh:mm:ss

###### Parameters
none

###### Return
(*string*) string of the format hh:mm:ss