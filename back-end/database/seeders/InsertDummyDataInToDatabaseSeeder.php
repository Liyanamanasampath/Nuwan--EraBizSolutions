<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class InsertDummyDataInToDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            ['country_id' => 1, 'name' => 'United States', 'created_at' => now(), 'updated_at' => now()],
            ['country_id' => 2, 'name' => 'Canada', 'created_at' => now(), 'updated_at' => now()],
            ['country_id' => 3, 'name' => 'Mexico', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('states')->insert([
            ['state_id' => 1, 'name' => 'California', 'country_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['state_id' => 2, 'name' => 'Texas', 'country_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['state_id' => 3, 'name' => 'Ontario', 'country_id' => 2, 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('specialties')->insert([
            ['specialty_id' => 1, 'name' => 'Cardiology', 'created_at' => now(), 'updated_at' => now()],
            ['specialty_id' => 2, 'name' => 'Neurology', 'created_at' => now(), 'updated_at' => now()],
            ['specialty_id' => 3, 'name' => 'Dermatology', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('hospitals')->insert([
            ['hospital_id' => 1, 'name' => 'Mount Sinai Hospital', 'created_at' => now(), 'updated_at' => now()],
            ['hospital_id' => 2, 'name' => 'Johns Hopkins Hospital', 'created_at' => now(), 'updated_at' => now()],
            ['hospital_id' => 3, 'name' => 'Mayo Clinic', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('doctors')->insert([
            ['doctor_id' => 1, 'name' => 'John Smith', 'country_id' => 1, 'state_id' => 1, 'specialty_id' => 1, 'hospital_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['doctor_id' => 2, 'name' => 'Jane Doe', 'country_id' => 2, 'state_id' => 3, 'specialty_id' => 2, 'hospital_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['doctor_id' => 3, 'name' => 'Bob Johnson', 'country_id' => 1, 'state_id' => 2, 'specialty_id' => 3, 'hospital_id' => 3, 'created_at' => now(), 'updated_at' => now()],
        ]);
        DB::table('appointments')->insert([
            [
                'patient_name' => 'John Doe',
                'doctor_id' => 1,
                'date' => '2023-04-01',
                'time' => '10:00:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'patient_name' => 'Jane Smith',
                'doctor_id' => 2,
                'date' => '2023-04-02',
                'time' => '14:00:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'patient_name' => 'Bob Johnson',
                'doctor_id' => 3,
                'date' => '2023-04-03',
                'time' => '12:00:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
