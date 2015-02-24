describe('convert', function () {
  it('should change Arabic numbers to Persian', function (done) {
    var content = document.querySelector('#arabiNumber').innerHTML;
    chai.assert.equal(content, '۱۲۳۴۵۶۷۸۹۰');
    done();
  });

  it('should change Arabic characters to Persian', function (done) {
    var content = document.querySelector('#arabiChar').innerHTML;
    chai.assert.equal(content, 'یکدبزذشسی');
    done();
  });

  it('should change Numbers to Persian', function (done) {
    var content = document.querySelector('#number').innerHTML;
    chai.assert.equal(content, '۱۲۳۴۵۶۷۸۹۰');
    done();
  });

  it('should fix url', function (done) {
    var content = document.querySelector('#fixUrl').innerHTML;
    chai.assert.equal(content, 'https://fa.wikipedia.org/wiki/صفحهٔ_اصلی');
    done();
  });

  it('should switch keyboard layout', function (done) {
    var content = document.querySelector('#switchKey').innerHTML;
    chai.assert.equal(content, 'google');
    done();
  });

  it('should conver number to persian words', function (done) {
    var content = document.querySelector('#digitWords').innerHTML;
    chai.assert.equal(content, 'دو هزار و ششصد و نوزده');
    done();
  });
});
