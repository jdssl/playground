FROM postgres

ENV POSTGRES_USER root
ENV POSTGRES_PASSWORD 123456
ENV POSTGRES_DB company

COPY ./scripts /docker-entrypoint-initdb.d
