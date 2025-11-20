let spaceData = {};

// async function loadData() {
//     try {
//         const response = await fetch('data.json');
//         spaceData = await response.json();
//         console.log('Awesome! Data loaded successfully!');
//         return spaceData;
//     } catch (error) {
//         console.log('Oops! Something went wrong loading the data:', error);
//     }
// }

fetch("data.json")
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      spaceData = data; 
      console.log("Data add:", spaceData);


    // console.log('LEVEL 1:');
    console.log('1. How many destinations?', countTotalDestinations());
    console.log('2. Available destinations:', getAvailableDestinations());
    console.log('3. First booking ever:', getFirstBooking());
    console.log('4. Total money made:', calculateTotalRevenue());
    console.log('5. Find John Smith:', findUserByEmail('john.smith@email.com'));
    
    // console.log('\nLEVEL 2:');
    console.log('6. Total passengers:', countTotalPassengers());
    // console.log('7. Bookings by status:', groupBookingsByStatus());
    console.log('8. Most expensive trip:', findMostExpensiveBooking());
    console.log('9. Booking summaries:', getBookingSummary());
    console.log('10. Update booking:', updateBookingStatus('BK001', 'cancelled'));
    
    // console.log('\nLEVEL 3:');
    console.log('11. Money per destination:', calculateRevenueByDestination());
    console.log('12. Most bookings by:', findUserWithMostBookings());
    // console.log('13. March bookings:', filterBookingsByDate('2024-03-01', '2024-04-01'));
    console.log('14. All passenger names:', getAllPassengerNames());
  })
  

// fetch("data.json").then(function(response) {}
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })



// CHALLENGE 1: Count how many destinations we have
// RESTRICTION use Only for, while, and standard logic.
function countTotalDestinations() {
   let count = 0;
    for (let i = 0; i < spaceData.destinations.length; i++) {
        count ++;
    }
    // console.log(count);
    return count;
    
}


// CHALLENGE 2: Find destinations that are available for booking
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAvailableDestinations() {
    return spaceData.destinations.filter(function(dest){
        console.log(dest);
        return dest.available === true;
    });
}


// CHALLENGE 3: Get the very first booking in our system
// RESTRICTION use Only for, while, and standard logic.
function getFirstBooking() {
    let firstBK = null;
    for (let i = 0; i < spaceData.bookings.length; i++) {
        if (firstBK === null) {
            firstBK = spaceData.bookings[i];
        }
    }
    // console.log(helloooooooooo);
    return firstBK;
}



// CHALLENGE 4: Calculate how much money we've made from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function calculateTotalRevenue() {
    let total = 0;
    for (let i = 0; i < spaceData.bookings.length; i++) {
        total += spaceData.bookings[i].totalPrice;
    }
    return total;
}


// CHALLENGE 5: Find a user by their email address
// RESTRICTION use Only for, while, and standard logic.
function findUserByEmail(email) {
   for (let i = 0; i < spaceData.users.length; i++) {
        if (spaceData.users[i].email === email) {
            return spaceData.users[i];
        }
    }
    return null;
    
}

// CHALLENGE 6: Count all passengers across every booking
// RESTRICTION use Only for, while, and standard logic.
function countTotalPassengers() {
   let total = 0;
    for (let i = 0; i < spaceData.bookings.length; i++) {
        total += spaceData.bookings[i].passengers.length;
    }
    return total;
    
}


// ########################################################################################################

// CHALLENGE 7: Group bookings by their status (confirmed, pending, etc.)
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.

// function groupBookingsByStatus() {
    // We want an object that looks like:
    // {
    //   confirmed: [booking1, booking2...],
    //   pending: [booking3...]
    // }
   
// }
// #######################################################################################################




// CHALLENGE 8: Find the most expensive booking
// RESTRICTION use Only for, while, and standard logic.
function findMostExpensiveBooking() {
    let maxBooking = null;
    for (let i = 0; i < spaceData.bookings.length; i++) {
        if (!maxBooking || spaceData.bookings[i].totalPrice >= maxBooking.totalPrice) {
            maxBooking = spaceData.bookings[i];
        }
    }
    return maxBooking;    

}

// CHALLENGE 9: Create a simple summary of all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getBookingSummary() {
    // We want to make each booking simpler - just show:
    // id, destination, number of passengers, and total price
        let summary = [];
        for (let i = 0; i < spaceData.bookings.length; i++) {
        let BK = spaceData.bookings[i];
        summary.push({
            id: BK.id,
            destination: BK.destination,
            passengers: BK.passengers.length,
            totalPrice: BK.totalPrice
        });
    }
    return summary;
}

// CHALLENGE 10: Update a booking's status
// RESTRICTION use Only for, while, and standard logic.
function updateBookingStatus(bookingId, newStatus) {
    
     for (let i = 0; i < spaceData.bookings.length; i++) {
        if (spaceData.bookings[i].id === bookingId) {
            spaceData.bookings[i].status = newStatus;
            return spaceData.bookings[i];
        }
    }
    return null;
}


// CHALLENGE 11: Calculate how much money each destination has made
// RESTRICTION use Only for, while, and standard logic.
function calculateRevenueByDestination() {
    // We want an object that shows total revenue for each destination:
    // { 'Moon Base Alpha': 195000, 'Mars Colony One': 250000 }
    let revenue = {};
    for (let i = 0; i < spaceData.bookings.length; i++) {
        let Bk = spaceData.bookings[i];
        if (!revenue[Bk.destination]) revenue[Bk.destination] = 0;
        revenue[Bk.destination] += Bk.totalPrice;
    }
    return revenue;
}

// CHALLENGE 12: Find which user has made the most bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function findUserWithMostBookings() {
    let MAX_user = null;
    for (let i = 0; i < spaceData.users.length; i++) {
        if (!MAX_user || spaceData.users[i].totalBookings > MAX_user.totalBookings) {
            MAX_user = spaceData.users[i];
        }
    }
    return MAX_user;

}

// CHALLENGE 13: Find bookings between specific dates
// RESTRICTION use Only for, while, and standard logic.
// function filterBookingsByDate(startDate, endDate) {
    
    
// }

// CHALLENGE 14: Get a list of all passenger names from all bookings
// NO RESTRICTION You are encouraged to use map, filter, reduce, and Object.keys/Object.values/Object.entries where appropriate.
function getAllPassengerNames() {
   let names = [];
    for (let i = 0; i < spaceData.bookings.length; i++) {
        for (let j = 0; j < spaceData.bookings[i].passengers.length; j++) {
            names.push(spaceData.bookings[i].passengers[j].name);
        }
    }
    return names;
    
}

// CHALLENGE 15: Add a new booking with proper validation
// RESTRICTION use Only for, while, and standard logic.
// function addNewBooking(bookingData) {
   
    
// }

// ========================
// SOLUTIONS' TEST
// ========================


// async function testAllChallenges() {
 
//     await loadData();
    
//     console.log('TESTing !\n');
    
//     console.log('LEVEL 1:');
//     console.log('1. How many destinations?', countTotalDestinations());
//     console.log('2. Available destinations:', getAvailableDestinations());
//     console.log('3. First booking ever:', getFirstBooking());
//     console.log('4. Total money made:', calculateTotalRevenue());
//     console.log('5. Find John Smith:', findUserByEmail('john.smith@email.com'));
    
//     console.log('\nLEVEL 2:');
//     console.log('6. Total passengers:', countTotalPassengers());
//     console.log('7. Bookings by status:', groupBookingsByStatus());
//     console.log('8. Most expensive trip:', findMostExpensiveBooking());
//     console.log('9. Booking summaries:', getBookingSummary());
//     console.log('10. Update booking:', updateBookingStatus('BK001', 'cancelled'));
    
//     console.log('\nLEVEL 3:');
//     console.log('11. Money per destination:', calculateRevenueByDestination());
//     console.log('12. Most bookings by:', findUserWithMostBookings());
//     console.log('13. March bookings:', filterBookingsByDate('2024-03-01', '2024-04-01'));
//     console.log('14. All passenger names:', getAllPassengerNames());
    
    // Try adding a new booking
//     try {
//         const newBooking = {
//             userId: 'user456',
//             destinationId: 2,
//             destination: 'Mars Colony One',
//             package: 'basic',
//             passengers: [{ name: 'Bob Wilson', age: 45 }],
//             travelDate: '2024-07-01',
//             returnDate: '2024-07-03',
//             totalPrice: 250000,
//             status: 'pending'
//         };
//         console.log('15. Add new booking:', addNewBooking(newBooking));
//     } catch (error) {
//         console.log('15. Failed to add booking:', error.message);
//     }
// }


// window.testAllChallenges = testAllChallenges;
// window.spaceData = spaceData;

// Some tips for success:
// 1. Start with the easy challenges first
// 2. Use console.log to see what data you're working with
// 3. For restricted challenges, think "how would I do this manually?"
// 4. Test each function as you complete it
// 5. Don't worry if it takes time - learning is a process!

// console.log('Pro tip: Open browser console and type testAllChallenges() to check your work!');