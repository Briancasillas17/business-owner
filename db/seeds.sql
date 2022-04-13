USE employee_tracker;

INSERT INTO
  (name)
VALUES
  ("Engineering"), 
  ("Sales"), 
  ("Finance"), 
  ("Management"), 
  ("Legal");
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Manager', 100000, 1),
    ('Sales person', 75000, 1),
    ('Lead Engineer', 180000, 2),
    ('Developer', 120000, 2),
    ('Accounting Manager', 175000, 3),
    ('Accountant', 120000, 3),
    ('Legal Team Manager', 250000, 4),
    ('Lawyer', 190000, 4),
    ('Senior intern', 30000, 5),
    ('intern', 0, 5);

    INSERT INTO
    employee (first_name last_name role_id, manager_id)

 VALUES
    ('edward', 'ELric', 1, NULL),
    ('Alphonse', 'Envy', 2, 1),
    ('van', 'Hohenheim', 3, NULL),
    ('barry', 'chopper', 4, 3),
    ('pride', 'Casillas', 5, NULL),
    ('lust', 'hernandez', 6, 5),
    ('greed', 'quintero', 7, NULL), 
    ('wrath', 'salinas', 8, 7);