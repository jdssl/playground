# Mysql DB API Hooks

A MySQL database to receive api-triggers request.

## Commands

- Build: **docker build -t mysql-db-api-hooks .**
- Run: **docker run -d -p 3306:6606 --name mysql-db-api-hooks -e MYSQL_ROOT_PASSWORD=123456 mysql-db-api-hooks
- Exec: **docker exec -it mysql-db-api-hooks bash** and **mysql -uroot -p**
