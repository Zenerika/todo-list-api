$(document).ready(function() {
    console.log('ready')
    $.get('http://localhost:3000/api/todos')
        .then(function(data) {
            console.log(data)
            $('#ID').text(data)
        })    
  });

//   $('#add').click(function() {
//     $.post('http://localhost:3000/increment')
//         .then(function(data) {
//             console.log(data)
//             $('#count').text(data)
//         })
// });

// $("#delete").click(function() {
//     $.post('http://localhost:3000/decrement')
//         .then(function(data) {
//             console.log(data)
//             $('#count').text(data)
//         })
// });