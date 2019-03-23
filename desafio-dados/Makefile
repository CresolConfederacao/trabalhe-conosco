.PHONY: build RUN

IMAGE = solucaojulio

build:
	docker build -t $(IMAGE) .

run:
	docker run --rm -v `pwd`/out:/root/out $(IMAGE) \
	python solucao.py
