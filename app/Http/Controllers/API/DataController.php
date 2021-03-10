<?php

namespace App\Http\Controllers\API;

use App\Files;
use App\Records;
use App\Http\Controllers\Controller;
use App\Counter;
use App\Second;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DataController extends Controller
{
    public function records(Request $request){
        $order = $request->get('order');
        $search = $request->get('search');
        $records = Records::query();
        if ($order['column'] && $order['column'] != "" && $order['type'] && $order['type'] != "") {
            $records = $records->orderBy($order['column'], $order['type']);
        } else {
            $records = $records->orderBy('id', "asc");
        }
        if ($search != "") {
            $records = $records->where("code", "like", "%$search%")
                ->orWhere("author", "like", "%$search%")
                ->orWhere("name", "like", "%$search%")
                ->orWhere("condition", "like", "%$search%");
        }
        $records=$records->paginate(request("length"), ['*'], 'page', request("page"));
        return response()->json($records);
    }
    public function save_records(Request $request){
        $id=$request->get('id');
        $code=$request->get('code');
        $name=$request->get('name');
        $author=$request->get('author');
        $condition=$request->get('condition');
        if($id==0){
            $record= new Records();
            $record->code=$code;
            $record->name=$name;
            $record->author=$author;
            $record->condition=$condition;
            $record->save();
            return 1;
        }else{
            $record=Records::findOrFail($id);
            $record->code=$code;
            $record->name=$name;
            $record->author=$author;
            $record->condition=$condition;
            $record->update();
            return 2;
        }

    }
    public function delete_records(Request $request){
        $id=$request->get('id');
        $record=Records::findOrFail($id);
        $record->delete();
        return 2;

    }
}
