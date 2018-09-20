const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

	var users; 
	beforeEach(() => {
		users= new Users();
		users.user = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Mike2',
			room: 'React Course'
		},{
			id: '3',
			name: 'Mike3',
			room: 'Node Course'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Chang',
			room: 'The Office Fans'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);

	});
})