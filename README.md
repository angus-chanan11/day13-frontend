# ParkingLotManagement

generate a ParkingLotManagement component. The component should have the below children:

- text input for plate number
- a dropdown consisting 3 options {Standard, Smart, Super Smart}
- a button "Park"
- a button "Fetch"

all the children should be placed in one line

# ParkingSpace

generate a ParkingSpace component. The component receive a props which includes the below fields:

- plateNumber

The component should have the below children:

- a text holder 
    - Value as the plateNumber in props
    - Add a border around the text holder

# ParkingLot

generate a ParkingLot component. The component receive a props which includes the below fields:

- id
- name
- capacity
- tickets (a list of ticket object)

ticket object includes the below fields:

- plateNumber
- position
- parkingLot (id of parkingLot, should be same as the parent ParkingLot id)

The component should have the below children (in vertical order):

- a table
    - containing {capacity} number of cells, split the cells into 3 columns
    - Each cell is a ParkingSpace component (already implemented, no need to implement the component)
        - The position of a cell is calculated by ( 3 * {row index} + {column index} )
        - Fix the length of the cell to be 10 characters long, height to be 3 character high
        - For each ParkingSpace component, a plateNumber (from the ticket) props should be passed to them IF the cell positon matches with the ticket position
- a text holder
    - display the name of parking lot

Make sure BOTH the table and the name display are center aligned

# ParkingGroup

generate a ParkingGroup component. The component receive a props which includes the below fields:

- parkingLots (a list of parkingLot object)

The component should have the below children:

- a horizontal flex box
    - Includes {size of parkingLots} ParkingLot component (already implemented, no need to implement the component)
    - For each ParkingLot component, an unique parkingLot props should be passed to them (decompose the parkingLot into id, name, capacity, tickets when passing)
    - add spacing between each ParkingLot
    - align the ParkingLot to center

# Context

Add parkingLots (list of parkingLot objects) to the context of the app.
Also, create a reducer that can handle 3 action type: PARK, FETCH, SET. 

For PARK, loop through all parkingLot and check if the parkingLot id matches with the payload "parkingLot" properties. 
If matches, add the payload to the parkingLot tickets property
Return all parkingLot at the end

For FETCH and SET, just return the payload

# api

generate an api file that makes calls to localhost:8080 using axios. It contains the below methods:

- parkCar(plateNumber, parkingType) -> POST /api/v1/parking-manager/park
- fetchCar(plateNumber) -> POST /api/v1/parking-manager/fetch 
- getParkingLots() -> GET /api/v1/parking-manager/parking-lots