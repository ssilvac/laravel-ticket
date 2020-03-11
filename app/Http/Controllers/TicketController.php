<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TicketController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAllTickets()
    {
        $tickets =  Ticket::with('user')->get();
        return response()->json($tickets);
    }

    public function getTickets()
    {
        $tickets =  Ticket::with('user')
            ->where('user_id',  Auth::id())
            ->get();

        return response()->json($tickets);
    }

    public function takeTicket(Request $request, $id)
    {
        $ticket = Ticket::find($id);
        $ticket->ticket_pedido = true;
        $ticket->save();

        $saveTicket =  Ticket::with('user')
            ->where('id',  $ticket->id)
            ->first();

        return response()->json($saveTicket);
    }

    public function createTicket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric|min:1',
            'desc' => 'required'
        ]);

        if ($validator->fails()) {

            return response()
                ->json([
                    'error' => [
                        "message" => 'Validation Error',
                        "code" => 400
                    ]
            ]);
        }

        $ticket = new Ticket();
        $ticket->user_id = $request->get('user_id');
        $ticket->desc = $request->get('desc');
        $ticket->save();

        return response()->json($ticket);
    }
}
