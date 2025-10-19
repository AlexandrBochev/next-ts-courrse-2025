import { ROUTES } from "./routes"

export const UI = {
  NAV_BAR: [
    { title: "Home", href: ROUTES.HOME },
    { title: "Hooks", href: ROUTES.HOOKS },
    { title: "Projects", href: ROUTES.PROJECTS },
  ],
  TITLES: {
    WELCOME: "Welcome to Next TS Course",
    hooks: "React Hooks Demonstration",
    projects: "Projects Showcase",
  },
  DESCRIPTIONS: {
    INTRO: "This is a sample application to demonstrate Next.js with TypeScript.",
  },
  BUTTONS: {
    add: "Add",
    plusOne: "+1",
    minusOne: "-1",
    reset: "Reset",
    focus: "Focus",
    toggle: "Toggle Theme",
    rerender: "Re-render",
    unsubscribe: "Unsubscribe",
    subscribe: "Subscribe",
    submit: "Submit",
    save: "Save",
    tryAgain: "Try Again",
  },
  LABELS: {
    email: "Email",
    ui: "UI",
    server: "Server",
    labelId: "Label ID",
    InputId: "Input ID",
    name: "Name",
    count: "Count",
    width: "Width: ",
    height: "Height: ",
    renders: "Renders",
    result: "Result",
    items: "Items",
    paused: "Paused",
    deferredValue: "Deferred Value",
    saved: "Saved",
    deferred: (isDeferred: boolean) => (isDeferred ? "Deferred" : "Current"),
    openClose: (isOpen: boolean) => (isOpen ? "Close" : "Open"),
  },
  PLACEHOLDERS: {
    clickFocus: "Click 'Focus'",
    typeHere: "Type here...",
    focusableInput: "Focusable input",
  },
  MESSAGES: {
    ERRORS: {
      somethingWentWrong: "Something went wrong.",
      unknownError: "An unknown error occurred.",
    },
    loremIpsum: (isShort: boolean) =>
      isShort ? "This is a much longer message used for measuring height." : "Short message.",
  },
  UNITS: {
    pixels: "px",
  },
  THEMES: ["light", "dark", "system"],
}

export const METADATA = {
  HOME: {
    title: UI.TITLES.WELCOME,
    description: UI.DESCRIPTIONS.INTRO,
  },
  HOOKS: {
    title: UI.TITLES.hooks,
  },
  PROJECTS: {
    title: UI.TITLES.projects,
  },
}