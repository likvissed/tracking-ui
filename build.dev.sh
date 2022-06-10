#!/bin/bash -xe
docker-compose -f "docker-compose.dev.yml" -p tracking-ui-dev down --remove-orphans
# docker volume rm tracking-ui-dev_node_modules
DOCKER_BUILDKIT=1 docker-compose -f "docker-compose.dev.yml" -p tracking-ui-dev build
DOCKER_BUILDKIT=1 docker-compose -f "docker-compose.dev.yml" -p tracking-ui-dev up -d
