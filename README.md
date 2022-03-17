## Installation du projet
<br>

---
### Api
---
    cd api/ && \
    cp .env.example .env && \
    composer install && \
    sail up -d && \
    sail artisan key:generate && \
    sail artisan migrate && \
    sail artisan db:seed && \
    sail artisan passport:install

#### En cas de problème de token
    sail artisan passport:keys --force && \
    sail artisan passport:install --force
<br>

---
### Front
---
    cd app/ && \
    npm install && \
    ng serve --open
<br>

---
### Liens
---

#### Adminer : http://localhost:81
#### Api : http://localhost/api
#### Front : http://localhost:4200