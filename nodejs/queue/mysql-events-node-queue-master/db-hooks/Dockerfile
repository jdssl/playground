FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 123456
ENV MYSQL_DATABASE company_audit

COPY ./scripts/ /docker-entrypoint-initdb.d/
