let socket = io('http://localhost:5500');

socket.on('init', (data) => {
  orbs = data.orbs;
  console.log(data.orbs);
});
