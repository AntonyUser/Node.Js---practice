const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(__filename);

const postsPath = path.join(__dirname, "..", "db", "posts.json");
// console.log(postsPath);

async function readPosts(path) {
  const data = await fs.readFile(path, "utf-8");
  //   console.log(data);
  return data;
}

// readPosts(postsPath);

// async function createData(path) {
//   const newData = await fs.writeFile(
//     path,
//     JSON.stringify(
//       {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//       },
//       null,
//       4
//     )
//   );
// }

// const newPath = path.join(__dirname, "..", "db", "An.json");
// createData(newPath);

// async function removeFile(path) {
//   return await fs.unlink(path);
// }
// removeFile(newPath);

async function updateFile(path, user) {
  const data = await readPosts(path);
  const posts = JSON.parse(data);
  posts.push({
    userId: 32,
    id: 22,
    title: "Ton",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  });
  const updatedData = JSON.stringify(posts, null, 4);
  await fs.writeFile(path, updatedData);
}
updateFile(postsPath);

function asyncHandler(func, ...path) {
  try {
    func(...path);
  } catch (error) {
    console.log(error.message);
  }
}
asyncHandler(updateFile, postsPath);
