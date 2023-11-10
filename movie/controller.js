import { getAll, remove, get, save } from "./model.js";
import { render } from "./view.js";
import { render as formRender } from "./form.js";
import { readFileSync } from "fs";

export async function listAction(request, response) {
  const data = await getAll();
  const body = render(data);
  response.send(body);
}

export async function removeAction(request, response) {
  const id = parseInt(request.params.id, 10);
  await remove(id);
  response.redirect(request.baseUrl);
}

export async function formAction(request, response) {
  try {
    const movieId = request.params.id ? parseInt(request.params.id, 10) : null;
    console.log(movieId);
    const movie =
      movieId !== null ? await get(movieId) : { id: "", title: "", year: "" };
    console.log(movie);
    const body = formRender(movie);
    response.send(body);
  } catch (error) {
    console.log(error);
  }
}

export async function saveAction(request, response) {
  const movie = {
    id: request.body.id,
    title: request.body.title,
    year: request.body.year,
  };
  await save(movie);
  response.redirect(request.baseUrl);
}
