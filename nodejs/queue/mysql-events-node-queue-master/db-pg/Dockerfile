FROM postgres
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB company
COPY ./scripts/ /docker-entrypoint-initdb.d
