let data = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Thor",
    year: 2011,
  },
  {
    id: 3,
    title: "Captain America",
    year: 2011,
  },
];

export function getAll() {
  return Promise.resolve(data);
}

export function remove(id) {
  data = data.filter((movie) => movie.id !== id);
  return Promise.resolve();
}

export function get(id) {
  const newData = data.find((movie) => movie.id === id);
  if (newData) {
    console.log(newData);
    return Promise.resolve(newData);
  } else {
    return Promise.reject(`Movie with ID ${id} not found.`);
  }
}

function getNextId() {
  return Math.max(...data.map((movie) => movie.id)) + 1;
}

function insertMovie(movie) {
  movie.id = getNextId();
  data.push(movie);
}

function updateMovie(movie) {
  movie.id = parseInt(movie.id, 10);
  console.log(movie.id);
  const index = data.find((item) => item.id === movie.id);
  data[index] = movie;
}
export function save(movie) {
  try {
    if (movie.id === "") {
      insertMovie(movie);
      console.log("success :  movie inserted");
    } else {
      updateMovie(movie);
      console.log("success : movie updated");
    }
    return Promise.resolve();
  } catch (error) {
    console.error(error);
  }
}
