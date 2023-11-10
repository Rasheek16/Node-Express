export function render(movie) {
  console.log(movie.id);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport">
        <title>movie List</title>
    </head>
    <body>
    <form action="/movie/save" method="post">
    <input type="hidden" id="id" name="id" value="${movie.id}"/>
    <div>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" value="${movie.title}"/>
    </div>
    <div>
    <label for="year">year</label>
    <input type="text" id="year" name="year" value="${movie.year}" />
    </div>
    <div>
    <button type="submit">submit</button>
</form>
</body>
</html>`;
}
