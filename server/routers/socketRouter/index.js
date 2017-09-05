module.exports = (io) => {
	io.on('connection', (socket) => {
		socket.on('room', (a) => {
			  console.log(a);
			  debugger;
			  socket.emit('room2', a);
			});
		socket.on('disconnect', () => {
		  console.log('user disconnected');
		});		
	})
};
