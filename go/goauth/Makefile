build:
	podman-compose build
run: build
	podman-compose up
run-silent: build
	podman-compose up -d
test:
	make run-silent && sleep 1 && \
	go test -v tests/api_integration_test.go
clean:
	podman-compose down && \
	podman rmi goauth:latest



