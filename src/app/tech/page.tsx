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
  description: 'Tools and gadgets in use.',
}

export default function Tech() {
  return (
    <SimpleLayout
      title="Things I use."
      intro="Gear and software, nothing fancy."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro, Apple Silicon">
            Daily driver.
          </Tool>
          <Tool title="Apple Studio Display">
            Good display.
          </Tool>
          <Tool title="Kinesis Advantage360 Pro, Kailh Quiet Pink Switches">
            Split ergonomic keyboard.
          </Tool>
          <Tool title="Varmilo Minilo 75%, Kailh Prestige Silent Switches">
            Inspired by <a href="https://world.hey.com/dhh/finding-acoustical-delight-in-the-thock-aa84f70b" target="_blank" rel="noopener noreferrer">DHH&apos;s post on thock</a>.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development">
          <Tool title="Codex &amp; Claude Code">
            Codex for deeper coding sessions, Claude Code for analytics and research.
          </Tool>
          <Tool title="Warp">
            Terminal.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Docs, notes, everything.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
