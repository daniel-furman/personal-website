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
      intro="Here&apos;s a list of the things I use to ship."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro, Apple Silicon">
            Simply the best.
          </Tool>
          <Tool title="Apple Studio Display">
            I&apos;m a sucker for a good display.
          </Tool>
          <Tool title="Kinesis Advantage360 Pro with Kailh Quiet Pink Switches">
            Ergonomic split keyboard, so I don&apos;t get carpal tunnel.
          </Tool>
          <Tool title="Varmilo Minilo 75% with Kailh Prestige Silent Switches">
            Inspired by <a href="https://world.hey.com/dhh/finding-acoustical-delight-in-the-thock-aa84f70b" target="_blank" rel="noopener noreferrer">DHH&apos;s blog post</a>.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Codex &amp; Claude Code">
            Currently find myself using Codex for deeper coding and Claude Code for analytics and research.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity tools">
          <Tool title="Notion">
            More than docs.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
