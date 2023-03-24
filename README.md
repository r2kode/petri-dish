# Multipurpose backend

[Nest](https://github.com/nestjs/nest)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## PostreSQL

- `sudo service postgresql status` for checking the status of your database.
- `sudo service postgresql start` to start running your database.
- `sudo service postgresql stop` to stop running your database.
- `sudo -u postgres psql` connect to the postgres service and open the psql shell
- To exit postgres=# enter: `\q` or use the shortcut key: `Ctrl+D`

[Install PostgreSQL](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql)
