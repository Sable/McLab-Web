const assert = require('assert');
const expect = require("chai").expect;
const request = require("superagent");

const baseURL = 'http://localhost:3000';
const sessionIDFortran = 'test-user-fortran';
const sessionIDJS = 'test-user-javascript';

describe('invalid route', function(){
  it('should give a 404 error', function(done){
    request.get(baseURL + '/nonsense')
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  })
});

describe('base route', function(){
  it('should give a redirect', function(done){
    request.get(baseURL)
        .end(function(err, res){
          if(err) throw err;
          expect(res.redirects).to.have.lengthOf(1);
          done();
        });
  })
});

describe('newsession', function(){
  it('should give a redirect', function(done){
    request.get(baseURL + '/newsession/')
        .end(function(err, res){
          if(err) throw err;
          expect(res.redirects).to.have.lengthOf(1);
          done();
        });
  })
});

describe('base page', function(){
  it('should send back an HTML page', function(done){
    request.get(baseURL + '/session/' + sessionIDFortran)
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('type', 'text/html');
          done();
        });
  })
});

describe('shortenURL', function(){
  it('should shorten the URL and return a different URL', function(done){
    const currentLink = 'http://www.google.com';
    request.get(baseURL + '/shortenURL/' + currentLink)
        .end(function(err, res){
          if(err) throw err;
          const shortenedURL = JSON.parse(res.text).shortenedURL;
          expect(shortenedURL).to.have.length.below(currentLink.length);
          expect(shortenedURL).not.to.equal(currentLink);
          done();
        });
  });
});

describe('filetree', function(){
  it('should have the correct structure', function(done){
    request.get(baseURL + '/files/filetree/')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(err) throw err;
          const filetree = JSON.parse(res.text);
          expect(filetree.directories).to.be.a('array');
          expect(filetree.files).to.be.a('array');
          expect(filetree).to.have.property('path', 'workspace');
          done();
        });
  });

  it('should get nothing for nonexistent user', function(done){
    request.get(baseURL + '/files/filetree/')
        .set({'SessionID': 'nonsense'})
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('text', '{}');
          done();
        });
  });
});

describe('readfile', function(){
  it('should return readme for fortran test user', function(done){
    request.get(baseURL + '/files/readfile/demo_matlab/readme.txt')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('type', 'application/octet-stream');
          done();
        });
  });

  it('should return an error for nonexistent file', function(done){
    request.get(baseURL + '/files/readfile/nonsense')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should return an error for nonexistent user', function(done){
    request.get(baseURL + '/files/readfile/demo_matlab/readme.txt')
        .set({'SessionID': 'nonsense'})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });
});

describe('download', function(){
  it('should download fortran archive for fortran test user', function(done){
    request.get(baseURL + '/files/download/' + sessionIDFortran + '/' + 'gen/compiled-fortran-archive.zip')
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('type', 'application/zip');
          done();
        });
  });

  it('should download javascript file for javascript test user', function(done){
    request.get(baseURL + '/files/download/' + sessionIDJS + '/' + 'workspace/generated-JS/hello-shouldwork.js ')
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('type', 'text/plain');
          expect(res.text).to.not.be.null;
          done();
        });
  });

  it('should return an error for nonexistent user', function(done){
    request.get(baseURL + '/files/download/' + 'nonsense' + '/' + 'gen/compiled-fortran-archive.zip')
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should return an error for nonexistent file', function(done){
    request.get(baseURL + '/files/download/' + sessionIDFortran + '/' + 'nonsense')
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });
});

describe('kind analysis', function(){
  it('should successfully do analysis on valid matlab file', function(done){
    request.get(baseURL + '/analysis/kinds/demo_matlab/cholesky.m')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(err) throw err;
          const result = JSON.parse(res.text);
          expect(result).to.have.property('VAR');
          expect(result).to.have.property('FUN');
          done();
        });
  });

  it('should fail to do analysis on non-matlab file', function(done){
    request.get(baseURL + '/analysis/kinds/demo_matlab/readme.txt')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should fail for nonexistent file', function(done){
    request.get(baseURL + '/analysis/kinds/nonsense')
        .set({'SessionID': sessionIDFortran})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should fail for nonexistent user', function(done){
    request.get(baseURL + '/analysis/kinds/demo_matlab/cholesky.m')
        .set({'SessionID': 'nonsense'})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });
});

describe('mc2for', function(){
  it('should successfully compile to fortran for fortran user', function(done){
    const postBody = {
      mainFile: 'demo_matlab/testMain.m',
      arg: {
        mlClass: 'DOUBLE',
        numCols: '1',
        numRows: '1',
        realComplex: 'REAL'
      }
    };
    request.post(baseURL + '/compile/mc2for/')
        .set({'SessionID': sessionIDFortran})
        .send(postBody)
        .end(function(err, res){
          if(err) throw err;
          const result = JSON.parse(res.text);
          expect(result).to.have.property('package_path');
          done();
        });
  });

  it('should fail to compile to fortran for nonexistent user', function(done){
    const postBody = {
      mainFile: 'demo_matlab/testMain.m',
      arg: {
        mlClass: 'DOUBLE',
        numCols: '1',
        numRows: '1',
        realComplex: 'REAL'
      }
    };
    request.post(baseURL + '/compile/mc2for/')
        .set({'SessionID': 'nonsense'})
        .send(postBody)
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should fail to compile to fortran for nonexistent main file', function(done){
    const postBody = {
      mainFile: 'nonsense',
      arg: {
        mlClass: 'DOUBLE',
        numCols: '1',
        numRows: '1',
        realComplex: 'REAL'
      }
    };
    request.post(baseURL + '/compile/mc2for/')
        .set({'SessionID': sessionIDFortran})
        .send(postBody)
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should fail to compile to fortran for malformed arguments', function(done){
    const postBody = {
      mainFile: 'demo_matlab/testMain.m',
      arg: {
        mlClass: '4',
        numCols: 'WOW',
        numRows: '1',
        realComplex: 14
      }
    };
    request.post(baseURL + '/compile/mc2for/')
        .set({'SessionID': sessionIDFortran})
        .send(postBody)
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should fail to compile to fortran for invalid matlab', function(done){
    const postBody = {
      mainFile: 'demo_matlab_to_js/folder/testMain-shouldfailtorun.m',
      arg: {
        mlClass: 'DOUBLE',
        numCols: '1',
        numRows: '1',
        realComplex: 'REAL'
      }
    };
    request.post(baseURL + '/compile/mc2for/')
        .set({'SessionID': sessionIDJS})
        .send(postBody)
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });
});

describe('mcvmjs', function(){
  it('should compile valid code for javascript test user', function(done){
    request.post(baseURL + '/compile/mcvmjs/')
        .set({'SessionID': sessionIDJS})
        .send({fileName: 'demo_matlab_to_js/folder/hello-shouldwork.m'})
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('status', 200);
          done();
        });
  });

  it('should return error for invalid code', function(done){
    request.post(baseURL + '/compile/mcvmjs/')
        .set({'SessionID': sessionIDJS})
        .send({fileName: 'demo_matlab_to_js/folder/readme-shouldntstartcompile.m'})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should return error for nonexistent user', function(done){
    request.post(baseURL + '/compile/mcvmjs/')
        .set({'SessionID': 'nonsense'})
        .send({fileName: 'demo_matlab_to_js/folder/readme-shouldntstartcompile.m'})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });

  it('should return error for nonexistent file', function(done){
    request.post(baseURL + '/compile/mcvmjs/')
        .set({'SessionID': sessionIDJS})
        .send({fileName: 'demo_matlab_to_js/folder/nonsense.m'})
        .end(function(err, res){
          if(!err) throw err;
          expect(err).to.have.property('status', 404);
          done();
        });
  });
});

describe('docs', function(){
  it('should display docs html page', function(done){
    request.get(baseURL + '/docs')
        .end(function(err, res){
          if(err) throw err;
          expect(res).to.have.property('type', 'text/html');
          done();
        });
  });
});

