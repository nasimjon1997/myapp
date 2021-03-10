<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Counter;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    public function index(Request $request){
        $order = $request->get('order');
        $search = $request->get('search');
        $users = User::selectRaw('u.`id` as id,u.`name` AS name,u.`email` AS email,u.`status` AS status,u.`avatar` AS avatar,u.`role_id` AS role_id,r.display_name as r_name')
            ->from('users as u')
            ->join('roles as r','r.id','u.role_id');
        if ($order['column'] && $order['column'] != "" && $order['type'] && $order['type'] != "") {
            $users = $users->orderBy($order['column'], $order['type']);
        } else {
            $users = $users->orderBy('id', "asc");
        }

        if ($search != "") {
            $users = $users->where("name", "like", "%$search%")
                ->orWhere("email", "like", "%$search%");
        }
        $users->where('is_deleted',0);
        $users=$users->paginate(request("length"), ['*'], 'page', request("page"));
        return response()->json($users);
    }

    public function list(Request $request){
        $users = User::orderBy('name', "asc")->get();
        $List = [];
        foreach ($users as $u) {
            $List[] = ["id" => $u->id, "label" => $u->name];
        }
        return response()->json($List);
    }

    public function listForCounte(Request $request){
        $id=$request->get('id');
        $counter_id=$request->get('counter_id');

        $users = User::selectRaw('u.id,u.name')
            ->from('users as u')
            ->join('token_setting as ts','ts.user_id','u.id')
            ->where('ts.department_id', $id)
            ->where('ts.counter_id', $counter_id)
            ->orderBy('u.name', "asc")->get();
        $List = [];
        foreach ($users as $u) {
            $List[] = ["id" => $u->id, "label" => $u->name];
        }
        return response()->json($List);
    }

    public function save(Request $request){
        $saveFilePut='/images/user_avatars/';
        $image='';
        if($request->has("imageSrc") && strlen(trim($request->get("imageSrc")))>0){
            $image=$request->get("imageSrc");
            $base64_str = substr($image, strpos($image, ",")+1);
            $type = explode(';', $image)[0];
            $type = explode('/', $type)[1];
            if($type==""){
                $type='png';
            }
            //decode base64 string
            $image = base64_decode($base64_str);
            $safeName = rand(1000000000,9999999999).'.'.$type;
            Storage::disk('public2')->put($safeName, $image);
            $saveFilePut=$saveFilePut.$safeName;
        }
        $id = $request->get("id");
        $nameUser = $request->get("nameUser");
        $email = $request->get("email");
        $password = $request->get("password");
        $status = $request->get("status");
        $role_id = $request->get("role_id");
        if ($id > 0) {
            $branch = User::findOrFail($id);
            $branch->name = $nameUser;
            $branch->email = $email;
            if(strlen(trim($password))>5){
                $branch->password = bcrypt($password);
            }
            if($image){
                $branch->avatar =$saveFilePut;
            }
            $branch->status = $status;
            $branch->role_id = $role_id;
            $branch->update();
            return response()->json([
                'status'=>200,
                'message'=>'Успешно изменено.'
            ], 200);
        } else {
            $branch = new User();
            $branch->name = $nameUser;
            $branch->role_id = $role_id;
            $branch->email = $email;
            $branch->password = bcrypt($password);
            if($image){
                $branch->avatar =$saveFilePut;
            }
            $branch->status = $status;
            $branch->save();
            return response()->json([
                'status'=>200,
                'message'=>'Успешно сохранено.'
            ], 200);
        }
    }

    public function delete(Request $request){
        $id=$request->get("id");
        $user= User::find($id);
        if($user){
            $user->is_deleted=1;
            $user->update();
            return response()->json([
                'status'=>200,
                'message'=>'Успешно сохранено.'
            ], 200);
        }
        return response()->json([
            'status'=>404,
            'message'=>'Повторите попытку.'
        ], 404);
    }
}
