compose install
create .env file
php artisan migrate
php artisan db:seed --class=InsertDummyDataInToDatabaseSeeder
