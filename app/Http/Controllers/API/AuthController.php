<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\TokenSetting;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register()
    {
        User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

        return response()->json(['status' => 201]);
    }

    public function login()
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => request('username'),
            'password' => request('password'),
        ];
        $request = Request::create('/oauth/token', 'post', $data);
        return app()->handle($request);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json(['status' => 200]);
    }

    public function checkAuth()
    {
        if (auth()->user()) {
            $data["name"] = auth()->user()->name;
            $data["email"] = auth()->user()->email;
            $data["role"] = 'Admin';
            $data["role_name"] = 'Администратор';
            $data["avatar"] = auth()->user()->avatar;
            $data["id"] = auth()->user()->id;
            return response()->json($data);
        } else {
            return response()->json([], 200);
        }
    }

    public function profile()
    {
        if (auth()->user()) {
            $arr["fio"] = auth()->user()->name;
            $arr["email"] = auth()->user()->email;

            return json_encode($arr);
        } else {
            return 0;
        }
    }

    public function updateProfile(Request $request)
    {
        if (auth()->user()) {
            auth()->user()->name = $request->get("fio");
            auth()->user()->email = $request->get("email");
            if ($request->get("password") != "") {
                auth()->user()->password = bcrypt($request->get("password"));
            }
            auth()->user()->update();
            $arr["fio"] = auth()->user()->name;
            $arr["email"] = auth()->user()->email;

            return json_encode($arr);
        } else {
            return 0;
        }
    }
}



