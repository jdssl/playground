# MySQL DB Prod

A MySQL database to simulates the production database.

## Commands

- Build: **docker build -t mysql-db-prod .**
- Run: **docker run -d -p 3306:5506 --name mysql-db-prod -e MYSQL_ROOT_PASSWORD=123456 mysql-db-prod**
- Exec: **docker exec -it mysql-db-prod bash** and **mysql -uroot -p**
