from takashabe/lumber-web

COPY public /public/

CMD ["render", "/etc/nginx/nginx.conf", "--", "/usr/sbin/nginx", "-g", "daemon off;"]
