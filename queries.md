# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, categoryname
from products as p
join categories as c
on p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderdate, orderid, shippername
from [orders] as o
join shippers as s
on o.shipperid = s.shipperid
where orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT orderId, productname, quantity FROM [OrderDetails] 
join products as p
on orderdetails.productid = p.productid
where orderid in (10251) order by productname
limit 3


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orderid, customername, lastname FROM [Orders] as o
join customers as c
on o.customerid = c.customerid
join employees as e
on o.employeeid = e.employeeid




### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 