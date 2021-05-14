FROM nginx
LABEL   maintainer='Dai Meng <vanish1984@gmail.com>'
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./budday-common-frontend.conf /etc/nginx/conf.d/
COPY ./upstream.conf /etc/nginx/conf.d/
COPY ./dist/budday-common-frontend /usr/share/nginx/html

# EXPOSE 9002