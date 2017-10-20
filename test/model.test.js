
require('./init.js');
var ds = getDataSource();

describe('Firestore collection', function() {
	var Customer = ds.createModel('customer', {
		name: String,
		emails: [String],
		age: Number,
	});

	var customerObj;

	it('Should create a document', function(done) {
		Customer.create({
			name: 'Rodrigo Gonzalez Godoy',
			emails: [
				'noreply@blaze.me', 'foo@bar.com',
			],
			age: 32,
		}, function(err, customer) {
			customerObj = customer;
			customer.should.have.property('name', 'Rodrigo Gonzalez Godoy');
			customer.should.have.property('emails').with.lengthOf(2);
			done(err, customer);
		});
	});

	it('Should get all documents', function(done) {
		Customer.all(function(err, customer) {
			customer.should.be.array;
			done(err, customer);
		});
	});

	it('Should find a document by findById', function(done) {
		Customer.findById(customerObj.id, function(err, customer) {
			done(err, customer);
		});
	});

	it('Should Replace attributes for a model instance', function(done) {
		Customer.replaceById(customerObj.id, {emails: ['style.blaze@example.com']}, {validate: true}, function(err, customer) {
			customer.should.have.property('emails').with.lengthOf(1);
			done(err, customer);
		});
	});

	it('Should delete a document', function(done) {
		Customer.destroyAll({id: customerObj.id}, function(err, customer) {
			done(err, customer);
		});
	});
});
