# Tic-Tac-Toe
![image](https://github.com/AlaaDuridi/Tic-Tac-Toe/assets/51034664/41a9954e-0347-4038-8e0d-5ef3712c379b)
![image](https://github.com/AlaaDuridi/Tic-Tac-Toe/assets/51034664/69193fbd-c2b3-4629-87a9-569c003aabaa)
![image](https://github.com/AlaaDuridi/Tic-Tac-Toe/assets/51034664/03188f52-7898-4952-9cd3-f7ce94b17ea5)
![image](https://github.com/AlaaDuridi/Tic-Tac-Toe/assets/51034664/34d954be-cfcf-4b6c-80fe-adc082f85e44)

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

## Lifting State Up

- left the state up to the closes ancestor component that has access to all components that need to work with that state

- let the Ancestor Component Mange the State, which is needed by Child Components

## Top Notch Note:

- Avoid states in your application that intersect or interfere with each other.
- Handle objects immutably, meaning don't modify objects directly. Instead, create new objects with the necessary changes.
