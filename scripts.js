function sendMessage() {
		feedback_sent =false;
		function feedback(msg){
			//dependency of feedback_sent
			feedback_msg = msg;
			if (!feedback_sent) {
				document.getElementById('send-result').textContent = feedback_msg;
				alert(feedback_msg);
				feedback_sent=true;
			}
		}
		// Extracting values from the form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
		
		// Required parts
		if (name !='' && email !='' && message !='')
		{
			  const request = new XMLHttpRequest();
			  request.open("POST", "https://discord.com/api/webhooks/1244604928547360859/Lf2xWUcgK-o0jVi0T2W6Ob2J1FYkyU2bgP9xcn7LHJaZdnQvVeIahZWxeDBso3lgUXds");

			  request.setRequestHeader('Content-type', 'application/json');
			  
				finalmessage ="**Incoming contacting request:**\n";
				finalmessage += "Name: " + name +"\n";
				finalmessage += "*Email: " + email +"\n";
				finalmessage += "Phone: " + phone +"*\n";
				finalmessage += "**Message:** " + message +"\n";
				
			  const params = {
				content: finalmessage
			  }

			  request.send(JSON.stringify(params));
			  
			  request.onreadystatechange = function() {
				if (this.status == 204) {
					feedback("Sent! Thank you!");
					clearForm();
				}
				else {
					console.log(this);
					feedback("Error happened!");
				}
			  }
		} else
		{
			feedback("All required part need to fill!");
		}
		function clearForm(){
			document.getElementById('name').value= "";
            document.getElementById('email').value= "";
            document.getElementById('phone').value= "";
            document.getElementById('message').value= "";
		}
	}