export type Tool = {
  title: string
  description: string
}

export type ToolGroup = {
  name: string
  tools: Tool[]
}

export const groups: ToolGroup[] = [
  {
    name: 'workstation',
    tools: [
      {
        title: 'MacBook Pro',
        description:
          'Everything here is built on macOS. Fast enough that the build is never the thing I am waiting on.'
      },
      {
        title: 'Mac mini',
        description: 'The machine that stays on the desk. The laptop is for everywhere else.'
      },
      {
        title: 'MX Master 3',
        description: 'Logitech. The horizontal scroll wheel is the reason, and it is enough of one.'
      },
      {
        title: 'MX Keys',
        description: 'Logitech again. Low profile, and quiet enough to take a call over.'
      },
      {
        title: 'Chrome',
        description: 'My day-to-day browser, mostly for the devtools.'
      }
    ]
  },
  {
    name: 'tools',
    tools: [
      {
        title: 'VS Code',
        description: 'Plain, with as few extensions as I can get away with.'
      },
      {
        title: 'Hyper',
        description: 'The terminal I live in. Configured once, then left alone.'
      },
      {
        title: 'Raycast',
        description: 'Launcher, clipboard history, and the few scripts I reach for every day.'
      }
    ]
  }
]
