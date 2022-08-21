



INSERT INTO product (category, author, title, key_words, price, publication_date) VALUES
                               ('BOOK', 'J.K.ROWLING', 'Harry Potter1', 'The first book of Harry Potter series', 50, '1997-06-26'),
                               ('BOOK', 'J.K.ROWLING', 'Harry Potter2', 'The second book of Harry Potter series', 50, '1998-06-26'),
                               ('BOOK', 'J.K.ROWLING', 'Harry Potter3', 'The third book of Harry Potter series', 50, '1999-06-26'),
                               ('MAGAZINE', 'Amit Segal', 'Stam', 'The first magazine', 10, '2008-09-29');


INSERT INTO discount (amount) VALUES
                                         (5);

INSERT INTO bogo (product_id, level) VALUES
                               (1,1),
                               (2,2),
                               (3,3);

INSERT INTO area (name) VALUES
                                       ('Europe'),
                                       ('America'),
                                       ('Asia');

INSERT INTO country (name, fk_area) VALUES
('US', 2),
('UK', 1),
('France', 1),
('Italy', 1),
('Israel', 3);

INSERT INTO shipment_prices (basic_charge, item_charge, shipment_companyid, shipment_duration, shipment_optionid, fk_area) VALUES
                                        (10, 2, 1, 9, 1, 1),
                                        (15, 1, 1, 14, 1, 2),
                                        (13, 1, 2, 10, 1, 1),
                                        (14, 0.7, 2, 5, 1, 2),
                                        (9, 0.2, 1, 15, 2, 3),
                                        (5, 0.6, 1, 21, 2, 1),
                                        (6.9, 0.8, 2, 18, 2, 3),
                                        (7.99, 1.2, 2, 19, 2, 2),
                                        (4, 5.6, 1, 16, 3, 1),
                                        (2, 0.4, 1, 13, 3, 3),
                                        (20.99, 0.6, 2, 12, 3, 1),
                                        (19.99, 0.2, 2, 11, 3, 2);


INSERT INTO state (name) VALUES

    ('Alabama'),
    ('Alaska'),
    ('Arizona'),
    ('Arkansas'),
    ('California'),
    ('Colorado'),
    ('Connecticut'),
    ('Delaware'),
    ('Florida'),
    ('Georgia'),
    ('Hawaii'),
    ('Idaho'),
    ('Illinois'),
    ('Indiana'),
    ('Iowa'),
    ('Kansas'),
    ('Kentucky'),
    ('Louisiana'),
    ('Maine'),
    ('Maryland'),
    ('Massachusetts'),
    ('Michigan'),
    ('Minnesota'),
    ('Mississippi'),
    ('Missouri'),
    ('Montana'),
    ('Nebraska'),
    ('Nevada'),
    ('New Hampshire'),
    ('New Jersey'),
    ('New Mexico'),
    ('New York'),
    ('North Carolina'),
    ('North Dakota'),
    ('Ohio'),
    ('Oklahoma'),
    ('Oregon'),
    ('Pennsylvania'),
    ('Rhode Island'),
    ('South Carolina'),
    ('South Dakota'),
    ('Tennessee'),
    ('Texas'),
    ('Utah'),
    ('Vermont'),
    ('Virginia'),
    ('Washington'),
    ('West Virginia'),
    ('Wisconsin'),
    ('Wyoming');