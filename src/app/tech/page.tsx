import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description: 'Tools and gadgets in loving use.',
}

export default function Tech() {
  return (
    <SimpleLayout
      title="Tools and gadgets in use."
      intro="Here’s a big list of all of the things I build with."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro, Apple Silicon">
            I was using an Intel-based MacBook Pro prior to this and the
            difference is night and day.
          </Tool>
          <Tool title="Apple Studio Display">
            I&apos;m a sucker for a good display, and this
            one does not disappoint.
          </Tool>
          <Tool title="Varmilo Minilo 75% with Kailh Presitge Silent Switches">
            Inspired by <a href="https://world.hey.com/dhh/finding-acoustical-delight-in-the-thock-aa84f70b" target="_blank" rel="noopener noreferrer">DHH&apos;s blog post </a>.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Becuase I can&apos;t use a mouse.
          </Tool>
          <Tool title="Herman Miller Sayl Chair">
            It&apos;s real comfortable.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            Obviously.
          </Tool>
          <Tool title="Claude Code">
            Best command line coding agent, by far.
          </Tool>
          <Tool title="Promptfoo">
            Best package for evals (and free!!).
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Another obvious choice.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Pretty decent docs platform, waiting to try one that is better.
          </Tool>
          <Tool title="Jira">
            Because I have to.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
