
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing strip_string_knowledge with simple string', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_knowledge("Rayaan"),[],'Testing simple String without Management at the end');
    assert.deepEqual(strip_string_knowledge("Rayaan Management"),["Rayaan"],'Testing simple String with Management at the end');
     
});

QUnit.test('Testing strip_string_knowledge with html elements', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_knowledge("<h1>Rayaan</h1>"),[],'Testing html element without Management at the end');
    assert.deepEqual(strip_string_knowledge("<h1>Rayaan Management</h1>"),["Rayaan"],'Testing html element with Management at the end');
     
});

QUnit.test('Testing strip_string_knowledge with nested html elements', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_knowledge("<h1><i><b>Rayaan</b></i></h1>"),[],'Testing nested html element without Management at the end');
    assert.deepEqual(strip_string_knowledge("<h1><i><b>Rayaan Management</b></i></h1>"),["Rayaan"],'Testing nested html element with Management at the end');
     
});

QUnit.test('Testing strip_string_knowledge function with No Arguments', function (assert) {

    assert.throws(function () { strip_string_knowledge(); }, /The given argument is not a string/, 'no Argument method check');
});

QUnit.test('Testing strip_string_process with simple string', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_process("Rayaan"),[],'Testing simple String without Phase at the end');
    assert.deepEqual(strip_string_process("Rayaan Phase"),["Rayaan"],'Testing simple String with Phase at the end');
     
});

QUnit.test('Testing strip_string_process with html elements', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_process("<h1>Rayaan</h1>"),[],'Testing html element without Phase at the end');
    assert.deepEqual(strip_string_process("<h1>Rayaan Phase</h1>"),["Rayaan"],'Testing html element with Phase at the end');
     
});

QUnit.test('Testing strip_string_process with nested html elements', function (assert) {

    // Using deepEqual method in place of equal method for expected and actual value serialization

    assert.deepEqual(strip_string_process("<h1><i><b>Rayaan</b></i></h1>"),[],'Testing nested html element without Phase at the end');
    assert.deepEqual(strip_string_process("<h1><i><b>Rayaan Phase</b></i></h1>"),["Rayaan"],'Testing nested html element with Phase at the end');
     
});

QUnit.test('Testing strip_string_process function with No Arguments', function (assert) {

    assert.throws(function () { strip_string_process(); }, /The given argument is not a string/, 'no Argument method check');
});



