'use strict';

const request = prepare_the_request();
const response = send_request_synchronously(request,
	function (response) {
		display(response);
	}
);
