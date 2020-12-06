FROM nginx
LABEL   maintainer='Dai Meng <vanish1984@gmail.com>'
# COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/budday-frontend /usr/share/nginx/html

# EXPOSE 9002