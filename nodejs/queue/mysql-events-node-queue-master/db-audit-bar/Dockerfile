FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 123456
ENV MYSQL_DATABASE audit-bar

COPY ./scripts/ /docker-entrypoint-initdb.d/
