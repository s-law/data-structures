describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add strings to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add numbers to a set', function(){
    set.add(9);
    set.add(0);
    set.add(1.776);
    expect(set.contains(9)).to.equal(true);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(1.776)).to.equal(true);
  });

  it('should add arrays, objects, and functions to a set', function(){
    set.add([1,2,4,8]);
    set.add({a: 9, b: 8, c: 7});
    set.add(function(){return "Hi!";});
    expect(set.contains([1,2,4,8])).to.equal(true);
    expect(set.contains({a: 9, b: 8, c: 7})).to.equal(true);
    expect(set.contains(function(){return "Hi!";})).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

});
