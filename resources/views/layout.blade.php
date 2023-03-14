<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>宣言アプリ</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    >
</head>
<body>
    <header class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="{{ url('') }}">
                SengenApp
            </a>
        </div>
    </header>

    <div>
        @yield('content')
    </div>
</body>
</html>