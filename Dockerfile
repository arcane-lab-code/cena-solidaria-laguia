FROM nginx:alpine

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add health check endpoint
RUN echo '<!DOCTYPE html><html><body>OK</body></html>' > /usr/share/nginx/html/health

# Expose port
EXPOSE 80

# Health check - increased start period and timeout to allow nginx to fully start
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
