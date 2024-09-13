# CalHacks Badge: Ayush Paul

## Setup

1. Install [bun](https://bun.sh/)
2. Create a PostgreSQL database
3. Create a `.env.local` file with the following contents:

```bash
DATABASE_URL=
```

4. To run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Approach

- Started by [designing the UI in Figma](https://www.figma.com/design/XlnZ0PCnSYXywiyFCrIyK9/Untitled?node-id=0-1&t=ZwvQXL5PO7quMdl4-1)
- Then, decided to choose some implementation details
  - went classic with Next.js
  - used PostgreSQL as the database
  - decided to use this to learn more about Drizzle ORM, as I usually just go with Figma
  - used Tailwind CSS for styling as usual
  - Experimented with Shadcn Forms for the first time
- Finally, began implementing the functionality

## Future Goals

- make this more desktop responsive
- add flow transitions with framer motion
- send email to user with badge link so they dont lose it
