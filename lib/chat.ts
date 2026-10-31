import { personalInfo, projects, skills } from './data'

export type Block =
  | { kind: 'hero' }
  | { kind: 'projects'; only?: string[] }
  | { kind: 'skills' }
  | { kind: 'contact' }
  | { kind: 'resume' }
  | { kind: 'text'; text: string }

export type Message = {
  id: string
  role: 'user' | 'assistant'
  /** Only used by user messages (and the assistant's plain text intro). */
  text?: string
  blocks?: Block[]
  prompts?: string[]
}

export const QUICK_PROMPTS = [
  'What do you build?',
  'Show me your projects',
  "What's your tech stack?",
  'How can I reach you?',
]

export const FOLLOW_UP_PROMPTS = [
  'Show me your projects',
  "What's your tech stack?",
  'Download your resume',
]

/**
 * The "assistant" is scripted: it matches the question against the
 * portfolio data and replies with the relevant blocks. No API calls.
 */
export function answerFor(input: string): Pick<Message, 'blocks' | 'prompts'> {
    const q = input.toLowerCase()
    const has = (pattern: RegExp) => pattern.test(q)

    const namedProject = projects.find((project) => q.includes(project.title.toLowerCase()))
    if (namedProject) {
        return {
            blocks: [
                { kind: 'text', text: `Here's the write-up on ${namedProject.title}.` },
                { kind: 'projects', only: [namedProject.title] },
            ],
            prompts: ['See every project', "What's your tech stack?"],
        }
    }

    if (has(/resume|cv\b|download|pdf/)) {
        return {
            blocks: [
                {
                    kind: 'text',
                    text: 'My CV has the full picture — projects, stack, and internship. The PDF is below.',
                },
                { kind: 'resume' },
            ],
            prompts: ['Show me your projects', 'How can I reach you?'],
        }
    }

    if (has(/contact|email|reach|hire|availab|freelance|opportunit|message|talk/)) {
        return {
            blocks: [
                {
                    kind: 'text',
                    text: `I'm open to full-time and freelance work. Fastest way to reach me is email.`,
                },
                { kind: 'contact' },
            ],
            prompts: ['Download your resume', 'Show me your projects'],
        }
    }

    if (has(/project|work|built|build|portfolio|product|app|system/)) {
        return {
            blocks: [
                {
                    kind: 'text',
                    text: `Here are ${projects.length} things I've shipped — AI systems, real-estate tooling, and small-business apps.`,
                },
                { kind: 'projects' },
            ],
            prompts: ["What's your tech stack?", 'How can I reach you?'],
        }
    }

    if (has(/skill|stack|tech|tool|language|framework|database|machine|\bml\b|\bai\b|python|react|node/)) {
        return {
            blocks: [
                {
                    kind: 'text',
                    text: `I work across the stack, but backend and AI/ML are home. ${skills.length} things I use regularly:`,
                },
                { kind: 'skills' },
            ],
            prompts: ['Show me your projects', 'Download your resume'],
        }
    }

    if (has(/education|school|study|student|thesis|graduate|degree|university/)) {
        return {
            blocks: [
                {
                    kind: 'text',
                    text: 'CS student, graduating soon, 4 years of hands-on building. My thesis is GAIDA — an AI mental-health PWA for university students.',
                },
                { kind: 'projects', only: ['GAIDA'] },
            ],
            prompts: ['Show me your projects', "What's your tech stack?"],
        }
    }

    if (has(/who|about|yourself|background|bio|profile|intro|hello|hi\b|hey|name/)) {
        return {
            blocks: [
                { kind: 'hero' },
                {
                    kind: 'text',
                    text: "That's me. Ask about my projects, stack, or how to get in touch.",
                },
            ],
            prompts: QUICK_PROMPTS,
        }
    }

    return {
        blocks: [
            {
                kind: 'text',
                text: `I don't have a canned answer for that one. I can walk you through ${personalInfo.name.split(' ')[0]}'s work, stack, CV, or contact details.`,
            },
        ],
        prompts: QUICK_PROMPTS,
    }
}

export const welcomeMessage: Message = {
    id: 'welcome',
    role: 'assistant',
    blocks: [
        { kind: 'hero' },
        {
            kind: 'text',
            text: 'Ask me anything about my work — or pick a prompt below to start.',
        },
    ],
    prompts: QUICK_PROMPTS,
}
