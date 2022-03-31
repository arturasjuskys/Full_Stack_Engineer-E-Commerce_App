// 10 random users
module.exports.insertUsers = `
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Rhetta', 'Castagneto', 'rcastagneto0@google.ru', 'wMB3c2Z2');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Mercie', 'Warlawe', 'mwarlawe1@ted.com', 'rrQEHsL45Pt');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Channa', 'Shearwood', 'cshearwood2@csmonitor.com', 'SnwoVR1Yt');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Dale', 'Keach', 'dkeach3@a8.net', 'R5GdUlZIq');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Roseline', 'Axon', 'raxon4@msn.com', 'LDwin3uVbAcJ');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Babara', 'Luffman', 'bluffman5@mtv.com', 'tv75IWOGDNtw');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Aliza', 'Goade', 'agoade6@discovery.com', 'kKqvCXS');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Alasteir', 'Yitzovitz', 'ayitzovitz7@last.fm', 'hcYE9hKko7WV');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Tiphany', 'Blaxill', 'tblaxill8@4shared.com', 'oeboGl9SRVb');
  INSERT INTO users (first_name, last_name, email, password) VALUES ('Merrie', 'Claw', 'mclaw9@phoca.cz', '8SModAjMSU');
`;

// 10 carts
module.exports.insertCarts = `
  insert into carts (user_id) values (1);
  insert into carts (user_id) values (2);
  insert into carts (user_id) values (3);
  insert into carts (user_id) values (4);
  insert into carts (user_id) values (5);
  insert into carts (user_id) values (6);
  insert into carts (user_id) values (7);
  insert into carts (user_id) values (8);
  insert into carts (user_id) values (9);
  insert into carts (user_id) values (10);
`;

// 20 random products
module.exports.insertProducts = `
  INSERT INTO products (name, price, description) VALUES ('Pepper - Black, Crushed', 7.48, 'Rosemary - Dry');
  INSERT INTO products (name, price, description) VALUES ('Sambuca - Ramazzotti', 26.3, 'Garlic - Primerba, Paste');
  INSERT INTO products (name, price, description) VALUES ('Bread Fig And Almond', 74.08, 'Wine - White, Ej');
  INSERT INTO products (name, price, description) VALUES ('Ice Cream Bar - Rolo Cone', 32.72, 'Flour - Bran, Red');
  INSERT INTO products (name, price, description) VALUES ('Leeks - Large', 26.98, 'Pepper - Pablano');
  INSERT INTO products (name, price, description) VALUES ('Cheese - Woolwich Goat, Log', 40.73, 'Juice - Orange');
  INSERT INTO products (name, price, description) VALUES ('Crackers - Trio', 20.41, 'Pork - Shoulder');
  INSERT INTO products (name, price, description) VALUES ('Cookies - Englishbay Wht', 2.13, 'Table Cloth 54x54 Colour');
  INSERT INTO products (name, price, description) VALUES ('Coffee - French Vanilla Frothy', 85.18, 'Lettuce - Curly Endive');
  INSERT INTO products (name, price, description) VALUES ('Garlic - Elephant', 58.93, 'Sauce - Hoisin');
  INSERT INTO products (name, price, description) VALUES ('Bread - Hot Dog Buns', 33.79, 'Table Cloth 53x53 White');
  INSERT INTO products (name, price, description) VALUES ('Wine - Chateau Aqueria Tavel', 29.65, 'Sauce Bbq Smokey');
  INSERT INTO products (name, price, description) VALUES ('Soup Campbells - Italian Wedding', 1.25, 'Beef - Tenderloin Tails');
  INSERT INTO products (name, price, description) VALUES ('Wine - Casillero Del Diablo', 29.55, 'Pasta - Angel Hair');
  INSERT INTO products (name, price, description) VALUES ('Rice - 7 Grain Blend', 64.67, 'Bread - Roll, Whole Wheat');
  INSERT INTO products (name, price, description) VALUES ('Sour Cream', 86.54, 'Jam - Raspberry');
  INSERT INTO products (name, price, description) VALUES ('Rum - Mount Gay Eclipes', 91.82, 'Pork - Back, Short Cut, Boneless');
  INSERT INTO products (name, price, description) VALUES ('Sugar - Brown', 53.82, 'Wine - Magnotta - Red, Baco');
  INSERT INTO products (name, price, description) VALUES ('Soup - Campbells', 74.43, 'Cheese - Cheddar, Old White');
  INSERT INTO products (name, price, description) VALUES ('Veal - Round, Eye Of', 19.15, 'Container Clear 8 Oz');
`;

module.exports.insertOrders = `
  INSERT INTO orders (total, status, user_id) VALUES (9.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (99.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (19.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (5.99, 'pending', 2);
  INSERT INTO orders (total, status, user_id) VALUES (0.99, 'pending', 3);
`;