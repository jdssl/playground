'use strict';

window.addEventListener("load", function(event) {
  const status = document.getElementById("status");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const send = document.getElementById("send");
  const text = document.getElementById("text");
  const message = document.getElementById("message");

  status.textContent = "Not Connected";
  close.disabled = true;
  send.disabled = true;
  let socket;

  open.addEventListener("click", function(event) {
    open.disabled = true;
    socket = new WebSocket("ws://localhost:3000");

    socket.addEventListener("open", function(event) {
      close.disabled = false;
      send.disabled = false;
      status.textContent = "Connected";
    });

    socket.addEventListener("message", function(event) {
      message.textConent = `The server says: ${event.data.toString()}`;
    });

    socket.addEventListener("error", function(event) {
      status.textContent = `Error: ${event.data.toString()}`;
    });

    socket.addEventListener("close", function(event) {
      open.disabled = true;
      status.textContent = "Not Connected";
    });
  });

  close.addEventListener("click", function(event) {
    close.disabled = true;
    send.disabled = true;
    message.textContent = "";
    socket.close();
  });

  send.addEventListener("click", function(event) {
    socket.send(text.value);
    text.value = "";
  });
});
