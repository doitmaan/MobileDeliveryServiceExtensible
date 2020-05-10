## Technology Stack

![TechStack]

(https://github.com/doitmaan/MobileDeliveryServiceExtensible/blob/master/TechStack.png?raw=true)

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)


## How to run it?

1. Clone the repository:

```
$ git clone git@github.com:doitmaan/MobileDeliveryServiceExtensible.git
```

2. We are using shared folders to enable live code reloading. Without this, Docker Compose will not start:
    - Windows/MacOS: Add the cloned `saleor-platform` directory to Docker shared directories (Preferences -> Resources -> File sharing).
    - Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
    - Linux: No action required, sharing already enabled and memory for Docker engine is not limited.


3. Build the application:
```
$ docker-compose build
```

4. Apply Django migrations:
```
$ docker-compose run --rm api python3 manage.py migrate
```

5. Collect static files:
```
$ docker-compose run --rm api python3 manage.py collectstatic --noinput
```

6. Populate the database with example data and create the admin user:
```
$ docker-compose run --rm api python3 manage.py populatedb --createsuperuser
```
*Note that `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.*

7. Run the application:
```
$ docker-compose up
```
*Both storefront and dashboard are quite big frontend projects and it might take up to few minutes for them to compile depending on your CPU. If nothing shows up on port 3000 or 9000 wait until `Compiled successfully` shows in the console output.*



## How to run application parts?
  - `docker-compose up api worker` for backend services only
  - `docker-compose up` for backend and frontend services


## Where is the application running?
- Saleor Core (API) - http://localhost:8000
- Saleor Storefront - http://localhost:3000
- Saleor Dashboard - http://localhost:9000
- Jaeger UI (APM) - http://localhost:16686




## License

Disclaimer: Everything you see here is open and free to use as long as you comply with the [license](https://github.com/mirumee/saleor-platform/blob/master/LICENSE).

