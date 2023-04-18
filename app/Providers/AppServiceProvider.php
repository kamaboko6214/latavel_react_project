<?php

namespace App\Providers;
use App\Models\Sanctum\PersonalAccessToken; // 追加
use Laravel\Sanctum\Sanctum; // 追加
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // これを記述
        Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
    }
}
