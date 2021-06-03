const Employee = require('../employees.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

  it('should throw an error if any arg is missing', () => {
    const cases = [
      {
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        firstName: 'John',
        department: 'Marketing'
      },
      {
        lastName: 'Doe',
        department: 'Marketing'
      }
    ];
    for(let prop of cases) {
      const emp = new Employee(prop);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw error if "firstName" is not a string', () => {
    const cases = [{}, []];
    for(let firstName of cases) {
      const emp = new Employee({ firstName });
      emp.validate(err => {
        expect(err.errors.firstName).to.exist;
      });
    }
  });

  it('should throw error if "lastName" is not a string', () => {
    const cases = [{}, []];
    for(let lastName of cases) {
      const emp = new Employee({ lastName });
      emp.validate(err => {
        expect(err.errors.lastName).to.exist;
      });
    }
  });

  it('should throw error if "department" is not a string', () => {
    const cases = [{}, []];
    for(let department of cases) {
      const emp = new Employee({ department });
      emp.validate(err => {
        expect(err.errors.department).to.exist;
      });
    }
  });

  it('should not throw an error if all args are ok', () => {
    const cases = [
      {
        firstName: 'John',
        lastName: 'Doe',
        department: 'Marketing'
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        department: 'Testing'
      }
    ];
    for(let prop of cases) {
      const emp = new Employee(prop);
      emp.validate(err => {
        expect(err).to.not.exist;
      });
    }
  });

});

after(() => {
  mongoose.models = {};
});
