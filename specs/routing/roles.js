import jwt from 'jsonwebtoken';
import settings from '../../config/settings';

import User from '../../models/user';
import Role from '../../models/role';

describe('Routes: Roles', () => {
  const jwtSecret = settings.jwt.jwtSecret;
  const adminRole = {name: 'admin'};
  const defaultRole = {name: 'user'};
  const adminUser = {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin',
  };
  const defaultUser = {
    name: 'User',
    email: 'user@gmail.com',
    password: 'user',
  };

  let token;

  beforeEach(done => {
    Role
    .create(adminRole)
    .then(role => {
      adminUser.roles = role;
      return User.create(adminUser);
    })
    .then(user => {
      token = jwt.sign(user, jwtSecret);
      done();
    });
  });

  afterEach(done => {
    Role
    .remove()
    .then(() => {
      User.remove(done);
    });
  });

  describe('GET /roles', () => {
    describe('should return a list of roles', done => {
      it( 'should be valid array', done => {
        request
        .get('/api/roles')
        .set('Authorization', `JWT ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.not.be.null;
          expect(res.body).to.not.be.undefined;
          expect(res.body).to.not.be.empty;
          done(err);
        });
      });

      it('should be a admin role', done => {
        request
        .get('/api/roles')
        .set('Authorization', `JWT ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0].name).to.eql(adminRole.name);
          done(err);
        });
      });

      it( 'should be a admin role', done => {
        request
        .get('/api/roles')
        .set('Authorization', `JWT ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.req._headers.authorization).to.eql(`JWT ${token}`);
          expect(res.req._headers.authorization).to.have.string(token);
          done(err);
        });
      });

    });
  });

  // describe('GET /roles/{id}', () => {
  //   it('should return a role by id', done => {
  //     request
  //     .get('/roles/1')
  //     .set('Authorization', `JWT ${token}`)
  //     .end((err, res) => {
  //       expect(res.body.name).to.eql(defaultRole.name);
  //       expect(res.body.id).to.eql(defaultRole.id);
  //       done(err);
  //     });
  //   });
  // });

  // describe('POST /roles', () => {
  //   it('should post a role', done => {
  //     const role = {
  //       id: 2,
  //       name: 'Role Created',
  //     };

  //     request
  //     .post('/roles')
  //     .set('Authorization', `JWT ${token}`)
  //     .send(role)
  //     .end((err, res) => {
  //       expect(res.body.name).to.eql(role.name);
  //       expect(res.body.id).to.eql(role.id);
  //       done(err);
  //     });
  //   });
  // });

  // describe('PUT /roles/{id}', () => {
  //   it('should update a role', done => {
  //     const role = {
  //       id: 1,
  //       name: 'Role Updated',
  //     };

  //     request
  //     .put('/roles/1')
  //     .set('Authorization', `JWT ${token}`)
  //     .send(role)
  //     .end((err, res) => {
  //       expect(res.body).to.eql([1]);
  //       done(err);
  //     });
  //   });
  // });

  // describe('DELETE /roles/{id}', () => {
  //   it('should delete a role', done => {
  //     request
  //     .delete('/roles/1')
  //     .set('Authorization', `JWT ${token}`)
  //     .end((err, res) => {
  //       expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
  //       done(err);
  //     });
  //   });
  // });

});
