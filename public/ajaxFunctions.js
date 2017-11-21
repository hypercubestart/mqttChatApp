function test(val) {
  alert(val);
}

function login(usernameVal) {
  //show overlay
  $.ajax({
    type: 'POST',
    url: '/login',
    data: {
      username: usernameVal
    },
    success: function(results) {
      console.log(results);
      $("#msg").text(results.response);
      window.location.assign('/chat');
    },
    error: function(results, status, err) {
      console.log(results);
      $("#msg").text(results.responseJSON.response);
    },
    dataType: "json"
  }).always(function() {
    //remove overlay
  })
}