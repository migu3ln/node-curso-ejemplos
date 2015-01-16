$(document).ready(function() {


    $('#container').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });


  
  var socket = io(), nickname, msgList = $('#messages');

  // Check if nickname stored in localStorage
  if('localStorage' in window && localStorage.getItem('nickname')) {
    nickname = localStorage.getItem('nickname');
  } else {
    // If not in localStorage, prompt user for nickname
    nickname = prompt('Please enter your nickname');
    if('localStorage' in window) {
      localStorage.setItem('nickname', nickname);
    }
  }  

  // Send message to server that user has joined
  socket.emit('join', nickname);
  
  // Function to add a message to the page
  var newMessage = function(data) {
    var who = $('<div class="who">').text(data.nickname),
        when = $('<div class="when">').text(new Date().toString().substr(0, 24)),
        msg = $('<div class="msg">').text(data.msg),
        header = $('<div class="header clearfix">').append(who).append(when),
        li = $('<li>').append(header).append(msg);    
   
    msgList.prepend(li);
  };

  // Handle the form to submit a new message
  $('form').submit(function(e) {
    var msgField = $('#msg'),        
        data = { msg: msgField.val(), nickname: nickname, when: new Date() };

    e.preventDefault();
    // Send message to Socket.io server
    socket.emit('msg', data);
    // Add message to the page
    newMessage(data);
    // Clear the message field
    msgField.val('');    
  });  

  // When a message is received from the server
  // add it to the page using newMessage()
  socket.on('msg', function(data) { newMessage(data); });

  // When a notice is received from the server
  // (user joins or disconnects), add it to the page
  socket.on('notice', function(msg) {
    msgList.prepend($('<div class="notice">').text(msg));
  });
});