describe('The time.js library', function() {
  it('parses different time formats correctly', function() {
    var test = time('20:30:22');
    expect(test.hours()).toBe(20);
    expect(test.minutes()).toBe(30);
    expect(test.seconds()).toBe(22);

    test = time('00:00:00');
    expect(test.hours()).toBe(0);
    expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(0);

    test = time('8:00:08');
    expect(test.hours()).toBe(8);
    expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(8);
  });

  it('sets invalid values to 0', function() {
  	var test = time('24:61:61');
    expect(test.hours()).toBe(0);
    expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(0);
  });

  it('manipulates its values correctly', function() {
  	var test = time();
  	test.hours(1);
  	expect(test.hours()).toBe(1);

  	test = time();
  	test.hours(24);
  	expect(test.hours()).toBe(0);

  	test = time();
  	test.hours(30);
  	expect(test.hours()).toBe(0);

  	test = time();
  	test.minutes(30);
  	expect(test.minutes()).toBe(30);

  	test = time();
  	test.minutes(60);
  	expect(test.minutes()).toBe(0);

  	test = time();
  	test.minutes(80);
  	expect(test.minutes()).toBe(0);

  	test = time();
  	test.seconds(40);
  	expect(test.seconds()).toBe(40);

  	test = time();
  	test.seconds(60);
  	expect(test.seconds()).toBe(0);

  	test = time();
  	test.seconds(80);
  	expect(test.seconds()).toBe(0);
  });

  it('adds hours correctly', function() {
  	var test = time();
  	test.add(5, 'hours');
  	expect(test.hours()).toBe(5);
  	expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(0);

    test = time('23:00:00');
    test.add(2, 'hours');
    expect(test.hours()).toBe(1);
  	expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(0);
  });

  it('adds minutes correctly', function() {
  	var test = time();
  	test.add(5, 'minutes');
  	expect(test.hours()).toBe(0);
  	expect(test.minutes()).toBe(5);
    expect(test.seconds()).toBe(0);

    test = time();
    test.add(61, 'minutes');
    expect(test.hours()).toBe(1);
  	expect(test.minutes()).toBe(1);
    expect(test.seconds()).toBe(0);

    test = time();
    test.add(60, 'minutes');
    expect(test.hours()).toBe(1);
  	expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(0);

    test = time();
    test.add(121, 'minutes');
    expect(test.hours()).toBe(2);
  	expect(test.minutes()).toBe(1);
    expect(test.seconds()).toBe(0);
  });

  it('adds seconds correctly', function() {
  	var test = time();
  	test.add(5, 'seconds');
  	expect(test.hours()).toBe(0);
  	expect(test.minutes()).toBe(0);
    expect(test.seconds()).toBe(5);

    test = time();
    test.add(61, 'seconds');
    expect(test.hours()).toBe(0);
  	expect(test.minutes()).toBe(1);
    expect(test.seconds()).toBe(1);

    test = time();
    test.add(60, 'seconds');
    expect(test.hours()).toBe(0);
  	expect(test.minutes()).toBe(1);
    expect(test.seconds()).toBe(0);

    test = time();
    test.add(121, 'seconds');
    expect(test.hours()).toBe(0);
  	expect(test.minutes()).toBe(2);
    expect(test.seconds()).toBe(1);

    test = time();
    test.add(3663, 'seconds');
    expect(test.hours()).toBe(1);
  	expect(test.minutes()).toBe(1);
    expect(test.seconds()).toBe(3);
  });

  it('compares objects correctly', function() {
  	expect(time('20:30:40').isBefore(time('20:30:50'))).toBe(true);
  	expect(time('20:29:50').isBefore(time('20:30:40'))).toBe(true);
  	expect(time('19:30:50').isBefore(time('20:20:40'))).toBe(true);

  	expect(time('20:30:51').isAfter(time('20:30:50'))).toBe(true);
  	expect(time('20:31:50').isAfter(time('20:30:50'))).toBe(true);
  	expect(time('21:30:50').isAfter(time('20:30:50'))).toBe(true);

  	expect(time().isSame(time())).toBe(true);
  	expect(time('23:59:59').isSame(time('23:59:59'))).toBe(true);
  });

  it('outputs times correctly', function() {
  	expect(time('20:30:50').toString()).toBe('20:30:50');
  	expect(time().toString()).toBe('00:00:00');
  	expect(time('8:30:50').toString()).toBe('08:30:50');
  });
});