# House Finder App

## Problem Statement:

Build an application that will allow a user to search for a home. Users will be able to search based on:
- Number of bedrooms
- Number of bathrooms
- Size
- Location
- Parking

## Components

This is a list of components, in order of importance to the App:

- [x] Search Form (dropdowns)
  - [x] Number of beds
  - [x] Number of baths
  - [x] Size
  - [x] Location
  - [x] Parking
- [X] Table for displaying data
- [ ] Registration
- [ ] Login
- [ ] Routing

## Data Storage
In the absence of a database, I'll store the houses in `houses.js` file:

```js
    const houses = [
        {
            id: 2,
            location: "tor",
            city: "Toronto",
            province: "Ontario",
            size: "small",
            squarefeet: "485",
            bed: 1,
            bath: 1,
            parking: "true"
        },
        ...
    ]
```

## Application Logic

- User enters data on the form
- Frontend validation occurs on inputs, ie:
  - not empty
  - could start the select on "Any" option
- Query the "database" to look for any matches
- Display results
- Bonus: sort results