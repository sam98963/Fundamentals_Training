SELECT allias1.name as Employee
FROM Employee allias1
LEFT JOIN Employee allias2
ON allias1.managerId = allias2.id
WHERE allias1.salary > allias2.salary;