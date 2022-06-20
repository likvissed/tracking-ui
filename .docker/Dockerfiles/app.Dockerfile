ARG NODE_MAJOR
FROM ***REMOVED***/registry/languages/nodejs/node:${NODE_MAJOR}-buster-slim AS builder

ARG ENVIRONMENT
ARG APP_ROOT
ARG NG_CLI_VERSION
WORKDIR ${APP_ROOT}

# Install angular-cli
RUN yarn global add @angular/cli@${NG_CLI_VERSION}

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn run build --configuration=${ENVIRONMENT}

# Deploy
FROM nginx:1.22.0-alpine
ARG APP_HOSTNAME

COPY ./.docker/tls/ /etc/pki/tls/nginx/
COPY .docker/nginx/nginx.conf /tmp/nginx.conf
RUN envsubst '${APP_HOSTNAME}' < /tmp/nginx.conf > /etc/nginx/conf.d/nginx.conf

COPY --from=builder /app/dist/tracking-ui /app/public

EXPOSE 80
EXPOSE 443

STOPSIGNAL SIGTERM
