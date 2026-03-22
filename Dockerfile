# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.14.0

################################################################################
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

################################################################################
# Install dependencies
FROM base as deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

################################################################################
# Build the application
FROM deps as build
COPY . .
# Ensure NEXT_TELEMETRY_DISABLED is 1 to speed up build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

################################################################################
# Production Runner
FROM base as final

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Run as non-root for security
USER node

# ✅ CRITICAL: Copy the public folder so your images work
COPY --from=build /usr/src/app/public ./public

# ✅ Optimized for your 'standalone' output
# This copies the minimal server and the static chunks
COPY --from=build --chown=node:node /usr/src/app/.next/standalone ./
COPY --from=build --chown=node:node /usr/src/app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

# ✅ Use node directly to run the standalone server
CMD ["node", "server.js"]