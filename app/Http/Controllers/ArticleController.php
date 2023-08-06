<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = Article::all();
        return response()->json($articles);
    }

    public function create(Request $request) {
        $article = new Article;
        $article->title = $request->title;
        $article->article = $request->article;
        $article->save();
        return response()->json($article, 200);
    }

}
