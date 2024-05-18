# Tic-Tac-Toe

# public/ vs assets/ for Image Storage

## The public/ directory

You can store images in the public/ folder and then directly reference them from inside your index.html or index.css files.

The reason for that is that images (or, in general: files) stored in public/ are made publicly available by the underlying project development server & build process. Just like index.html, those files can directly be visited from inside the browser and can therefore also be requested by other files.

## The src/assets/ Folder

You can also store images in the src/assets/ folder (or, actually, anywhere in the src folder).

Which Folder Should You Use?

You should use the public/ folder for any images that should not be handled by the build process and that should be generally available. Good candidates are images used directly in the index.html file or favicons.

On the other hand, images that are used inside of components should typically be stored in the src/ folder (e.g., in src/assets/).

- best practice to update a state based on old state is to use a function.
  setIsEditing((editing) => !editing);
  setIsEditing((editing) => !editing);
- (value would not change)
  vs
  setIsEditing(!isEditing);
  setIsEditing(!isEditing);
- (value still would change)

- Update Object-State Immutably:
  objects are reference values in JavaScript, so you should therefore NOT mutate them directly - instead create a (deep) copy first!

- Do not do this
  const updatedUser = user ; (will not create a copy since user is an object = a reference value)
  user.name = 'Max'; (editing the user object in memory)

- Do this
  const updatedUser = { ...user}; (creating a copy via JS's `spread` operator)
  updatedUser.name = 'Max'; (editing the copy, not the original)
