// PART 1

const { largeNumber, getCurrentDateTime } = require('./main.js')

const b = 5;

console.log(largeNumber + b);


// PART 2

// const http = require('http'); 
// const server = http.createServer( function (req, res) {
//     console.log("I'm listening")
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`
//     <html>
//       <head>
//         <title>My Module</title>
//       </head>
//       <body>
//         <p>My Module is ${number.largeNumber}</p>
//         <h1>Hi there at the frontend</h1>
//       </body>
//     </html>
//   `);
//   });

//   server.listen(3000, () => {
//     console.log("I'm listening");
//   });


  // PART 3

  const http = require('http'); 
//   const getCurrentDateTime = require('./main.js')

  const newDate = getCurrentDateTime();

  const server = http.createServer( function (req, res) {
      res.setHeader('Content-Type', 'text/html');
      res.end(`
      <html>
        <head>
          <title>My Module</title>
        </head>
        <body>
          <p>The date and time are currently ${newDate}</p>
          <h1>Hi there at the frontend</h1>
        </body>
      </html>
    `);
    });
  
    server.listen(8080, () => {
      console.log("I'm listening");
    });