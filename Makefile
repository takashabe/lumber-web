.DEFAULT_GOAL := help

##### Node

build: ## Run webpack build
	npm run build

watch: ## Run webpack watch
	npm run watch

##### Docker

docker-build: ## Build dokcer image
	npm run build
	docker build -t takashabe/lumber-frontend:latest .

docker-push: ## Push docker image to doker hub
	docker push takashabe/lumber-frontend:latest

##### Utilities

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
